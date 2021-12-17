import { AppContainer } from '~infra/container';

import IArticlesRepository from '~modules/articles/repositories/IArticlesRepository';

import { ListArticlesInput, ListArticlesOutput } from './types';

class ListArticles {
  private articlesRepository: IArticlesRepository;

  constructor(params: AppContainer) {
    this.articlesRepository = params.articlesRepository;
  }

  public async execute({
    category,
    loggedUser,
  }: ListArticlesInput): Promise<ListArticlesOutput> {
    const articles = await this.articlesRepository.find(category);

    if (!loggedUser) {
      return articles.map(({ author, category, title, summary }) => ({
        author,
        category,
        title,
        summary,
      }));
    }

    return articles;
  }
}

export default ListArticles;
