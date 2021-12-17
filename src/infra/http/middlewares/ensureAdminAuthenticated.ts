import { NextFunction, Request, Response } from 'express';

import AppError from '~infra/errors/AppError';

import HTTP_STATUS_CODE from '~core/http/HttpStatus';
import UsersRepository from '~modules/accounts/repositories/IUsersRepository';

async function ensureAdminAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const userId = request.user.id;

  const usersRepository =
    request.container.resolve<UsersRepository>('usersRepository');

  const user = await usersRepository.findById(userId);

  if (!user || !user.isAdmin) {
    throw new AppError(
      'Only admin can access this resource',
      HTTP_STATUS_CODE.UNAUTHORIZED,
    );
  }

  next();
}

export default ensureAdminAuthenticated;
