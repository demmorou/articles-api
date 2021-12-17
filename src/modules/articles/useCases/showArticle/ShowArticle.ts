import { AppContainer } from '~infra/container';

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

    if (!loggedUser) delete article.body;

    return article;
  }
}

export default ShowArticle;
