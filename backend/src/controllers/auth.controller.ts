/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import usersService from '../services/users.service';
import { validateDto } from '../utils/validation';
import AuthUserDto from '../dto/authUser.dto';
import { comparePassword, createJWT } from '../utils/auth';
import createHttpError from 'http-errors';
import { parseToken } from '../utils/parsers';
import { auth } from '../utils/middleware';
import { AuthResponse, TokenData } from '../types';

const authRouter = Router();

authRouter.post(
  '/',
  validateDto(AuthUserDto),
  async (req, res, next) => {
    const { email, password } = req.body as AuthUserDto;

    try {
      const user = await usersService.getByEmail(email);
      const passwordsMatch = await comparePassword(password, user.password);

      if (!passwordsMatch)
        return next(createHttpError.Unauthorized('Invalid password'));

      const userCrendentials: TokenData = {
        id: user.id,
        username: user.username,
        role: user.role
      };

      const token = createJWT(userCrendentials);
      const authResponse : AuthResponse = {
        ...userCrendentials,
        token
      };
      
      return res
        .status(200)
        .json(authResponse);
    } catch (e) {
      return next(e);
    }
  }
);

authRouter.get('/validate', auth.required, async (_req, res, next) => {
  try {
    const token = res.locals.token as string;
    const decodedToken = parseToken(res.locals.user);

    const user = await usersService.getById(decodedToken.id);
    
    if (!user) return next(createHttpError.Unauthorized(''));

    const authReponse : AuthResponse = {
      ...decodedToken,
      token
    };

    return res.status(200).json(authReponse);
  } catch (e) {
    return next(e);
  }
});

export default authRouter;
