import { AppContainer } from '~infra/container';

import ArticleDTO from '~modules/articles/domain/ArticleDTO';
import IArticlesRepository from '~modules/articles/repositories/IArticlesRepository';

class ListArticles {
  private articlesRepository: IArticlesRepository;

  constructor(params: AppContainer) {
    this.articlesRepository = params.articlesRepository;
  }

  public async execute(): Promise<ArticleDTO[]> {
    const articles = await this.articlesRepository.find();

    return articles;
  }
}

export default ListArticles;
