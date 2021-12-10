import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import RegisterUser from '~modules/accounts/useCases/registerUser/RegisterUser';

async function registerUserController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { email, name, password } = request.body;

  const registerUser = request.container.resolve<RegisterUser>('registerUser');

  await registerUser.execute({ email, name, password });

  return response.status(HTTP_STATUS.CREATED).send();
}

export default registerUserController;
