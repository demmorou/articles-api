import { AppContainer } from '~infra/container';
import AppError from '~infra/errors/AppError';

import IArticlesRepository from '~modules/articles/repositories/IArticlesRepository';
import IAuthorsRepository from '~modules/authors/repositories/IAuthorsRepository';

import { RegisterArticleInput } from './types';

class RegisterArticle {
  private articlesRepository: IArticlesRepository;
  private authorsRepository: IAuthorsRepository;

  constructor(params: AppContainer) {
    this.articlesRepository = params.articlesRepository;
    this.authorsRepository = params.authorsRepository;
  }

  public async execute({
    authorId,
    body,
    category,
    firstParagraph,
    summary,
    title,
  }: RegisterArticleInput): Promise<void> {
    const author = await this.authorsRepository.findById(authorId);

    if (!author) {
      throw new AppError('Author does not exists');
    }

    await this.articlesRepository.create({
      author_id: authorId,
      body,
      category,
      first_paragraph: firstParagraph,
      summary,
      title,
    });
  }
}

export default RegisterArticle;
