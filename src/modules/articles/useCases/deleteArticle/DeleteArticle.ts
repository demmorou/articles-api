import { AppContainer } from '~infra/container';

import IArticlesRepository from '~modules/articles/repositories/IArticlesRepository';

class DeleteArticle {
  private articlesRepository: IArticlesRepository;

  constructor(params: AppContainer) {
    this.articlesRepository = params.articlesRepository;
  }

  public async execute(id: string): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}

export default DeleteArticle;
