import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import UpdateAuthor from '~modules/authors/useCases/updateAuthor/UpdateAuthor';

export async function updateAuthorController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { id } = request.params;
  const { name, picture } = request.body;

  const updateAuthor = request.container.resolve<UpdateAuthor>('updateAuthor');

  await updateAuthor.execute({ name, id, picture });

  return response.status(HTTP_STATUS.NO_CONTENT).send();
}
