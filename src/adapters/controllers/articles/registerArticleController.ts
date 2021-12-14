import { Request, Response } from 'express';

import HTTP_STATUS from '~core/http/HttpStatus';
import RegisterArticle from '~modules/articles/useCases/registerArticle/RegisterArticle';

export async function registerArticleController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { authorId, category, title, summary, firstParagraph, body } =
    request.body;

  const registerArticle =
    request.container.resolve<RegisterArticle>('registerArticle');

  await registerArticle.execute({
    authorId,
    body,
    category,
    firstParagraph,
    summary,
    title,
  });

  return response.status(HTTP_STATUS.CREATED).send();
}
