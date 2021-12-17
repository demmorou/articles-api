import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import ListArticles from '~modules/articles/useCases/listArticles/ListArticles';

export async function listArticlesController(
  request: Request,
  response: Response,
): Promise<Response> {
  const loggedUser = !!request.user?.id;
  const category = <string>(request.query?.category as unknown);

  const listArticles = request.container.resolve<ListArticles>('listArticles');

  const articles = await listArticles.execute({ loggedUser, category });

  return response.status(HTTP_STATUS.OK).json(articles);
}
