import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import ShowArticle from '~modules/articles/useCases/showArticle/ShowArticle';

export async function showArticleController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { id } = request.params;
  const { isAdmin } = request.user;

  const showArticle = request.container.resolve<ShowArticle>('showArticle');

  const article = await showArticle.execute({ id, isAdmin });

  return response.status(HTTP_STATUS.OK).json(article);
}
