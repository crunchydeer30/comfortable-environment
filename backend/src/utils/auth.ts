import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv';
import { TokenData } from '../types';
import { Request } from 'express';

const JWT_SECRET = process.env.JWT_SECRET;


export const getToken = (req: Request) => {
  if (!req.headers.authorization) {
    return null;
  }
  const bearer = req.headers.authorization;
  const [, token] = bearer.split(' ');

  return token;
};

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hash: string) => {  
  return await bcrypt.compare(password, hash);
};

export const createJWT = (userCredentials: TokenData): string => {
  if (!JWT_SECRET) throw new Error('JWT_SECRET is not defined');

  const token = jwt.sign(userCredentials, JWT_SECRET);
  return token;
};

export const verifyJWT = (token: string) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) throw new Error('JWT_SECRET is not defined');
  
  const decodedToken = jwt.verify(token, JWT_SECRET);
  return decodedToken;
};