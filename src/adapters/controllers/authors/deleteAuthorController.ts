import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import DeleteAuthor from '~modules/authors/useCases/deleteAuthor/DeleteAuthor';

export async function deleteAuthorController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { id } = request.params;

  const deleteAuthor = request.container.resolve<DeleteAuthor>('deleteAuthor');

  await deleteAuthor.execute(id);

  return response.status(HTTP_STATUS.NO_CONTENT).send();
}
