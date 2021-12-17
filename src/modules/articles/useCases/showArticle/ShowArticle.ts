import { AppContainer } from '~infra/container';
import AppError from '~infra/errors/AppError';

import HTTP_STATUS from '~core/http/HttpStatus';
import IArticlesRepository from '~modules/articles/repositories/IArticlesRepository';

import { ShowArticleInput, ShowArticleOutput } from './types';

class ShowArticle {
  private articlesRepository: IArticlesRepository;

  constructor(params: AppContainer) {
    this.articlesRepository = params.articlesRepository;
  }

  public async execute({
    id,
    loggedUser,
  }: ShowArticleInput): Promise<ShowArticleOutput> {
    const article = await this.articlesRepository.findById(id);

    if (!article) {
      throw new AppError('Article nor found', HTTP_STATUS.NOT_FOUND);
    }

    if (!loggedUser) delete article.body;

    return article;
  }
}

export default ShowArticle;
