import { NextFunction, Request, Response } from 'express';

import AppError from '~infra/errors/AppError';

import HTTP_STATUS_CODE from '~core/http/HttpStatus';
import JwtHandler from '~handlers/JwtHandler';
import UsersRepository from '~modules/accounts/repositories/IUsersRepository';

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', HTTP_STATUS_CODE.UNAUTHORIZED);
  }

  const [, token] = authHeader.split(' ');

  try {
    const jwtHandler = request.container.resolve<JwtHandler>('jwtHandler');

    const userId = jwtHandler.verify(token);

    const usersRepository =
      request.container.resolve<UsersRepository>('usersRepository');

    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User does not exists', HTTP_STATUS_CODE.UNAUTHORIZED);
    }

    request.user = {
      id: userId,
    };

    next();
  } catch (error) {
    throw new AppError('Invalid token', HTTP_STATUS_CODE.UNAUTHORIZED);
  }
}

export default ensureAuthenticated;
