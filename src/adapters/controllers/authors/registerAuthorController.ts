import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import RegisterAuthor from '~modules/authors/useCases/registerAuthor/RegisterAuthor';

export async function registerAuthorController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { name, picture } = request.body;

  const registerAuthor =
    request.container.resolve<RegisterAuthor>('registerAuthor');

  await registerAuthor.execute({ name, picture });

  return response.status(HTTP_STATUS.CREATED).send();
}
