import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import { HttpError } from 'http-errors';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library';

import 'dotenv/config';
import { verifyJWT } from './auth';
import { getToken } from './auth';
import { parseToken } from './parsers';
import { Role } from '@prisma/client';
import { TokenData } from '../types';

export const extractUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = getToken(req);

  if (!token) return next();

  res.locals.token = token;
  try {
    const decodedToken = parseToken(verifyJWT(token));
    res.locals.user = decodedToken;
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  return next();
};

export const auth = {
  optional: (_req: Request, _res: Response, next: NextFunction) => {
    return next();
  },
  required: (_req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user as TokenData; 
    if (!user) throw new createHttpError.Unauthorized('Not Authorized');
    return next();
  },
  admin: (_req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user as TokenData; 
    if (!user) throw new createHttpError.Unauthorized('Not Authorized');
    if (user.role !== Role.ADMIN) throw new createHttpError.Forbidden('Forbidden');
    return next();
  }
};

export const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);

  if (error instanceof PrismaClientUnknownRequestError)
    return res.status(500).json({ error: 'Database error' });

  if (error instanceof PrismaClientKnownRequestError)
    return handleKnownPrismaError(error, res);

  if (error instanceof HttpError)
    return res
      .status(error.status)
      .json({ error: error.message || 'Error occured' });

  res.status(500).json({ error: 'Internal server error' });

  return next(error);
};


const handleKnownPrismaError = (
  error: PrismaClientKnownRequestError,
  res: Response
) => {
  switch (error.code) {
    case 'P2002': {
      let message = 'Field must be unique';
      if (error.meta) {
        message = `${error.meta.target} must be unique`;
      }
      return res.status(400).json({ error: message });
    }
    case 'P2000': {
      let message = 'Field is too long';
      if (error.meta && error.meta.column_name !== '(not available)') {
        message = `${error.meta.column_name} is too long`;
      }
      return res.status(400).json({ error: message });
    }
    default:
      return res.status(500).json({ error: 'Database error' });
  }
};


