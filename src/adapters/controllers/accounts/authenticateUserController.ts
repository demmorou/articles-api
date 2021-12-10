import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import AuthenticateUser from '~modules/accounts/useCases/authenticateUser/AuthenticateUser';

async function authenticateUserController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { email, password } = request.body;

  const authenticateUser =
    request.container.resolve<AuthenticateUser>('authenticateUser');

  const tokenData = await authenticateUser.execute({ email, password });

  return response.status(HTTP_STATUS.CREATED).json(tokenData);
}

export default authenticateUserController;
