import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import ShowAuthor from '~modules/authors/useCases/showAuthor/ShowAuthor';

export async function showAuthorController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { id } = request.params;

  const showAuthor = request.container.resolve<ShowAuthor>('showAuthor');

  const author = await showAuthor.execute(id);

  return response.status(HTTP_STATUS.OK).json(author);
}
