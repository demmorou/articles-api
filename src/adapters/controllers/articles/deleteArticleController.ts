import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import DeleteArticle from '~modules/articles/useCases/deleteArticle/DeleteArticle';

export async function deleteArticleController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { id } = request.params;

  const deleteArticle =
    request.container.resolve<DeleteArticle>('deleteArticle');

  await deleteArticle.execute(id);

  return response.status(HTTP_STATUS.NO_CONTENT).send();
}
