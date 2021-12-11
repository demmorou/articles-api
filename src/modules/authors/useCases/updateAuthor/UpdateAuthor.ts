import { AppContainer } from '~infra/container';
import AppError from '~infra/errors/AppError';
import { Logger } from '~infra/tools/log/types';

import HTTP_STATUS from '~core/http/HttpStatus';
import IAuthorsRepository from '~modules/authors/repositories/IAuthorsRepository';

import { UpdateAuthorInput } from './types';

class UpdateAuthor {
  private authorsRepository: IAuthorsRepository;
  private logger: Logger;

  constructor(params: AppContainer) {
    this.authorsRepository = params.authorsRepository;
    this.logger = params.logger;
  }

  public async execute({
    name,
    id,
    picture,
  }: UpdateAuthorInput): Promise<void> {
    const author = await this.authorsRepository.findById(id);

    if (!author) {
      this.logger.info('Author not found by id', { id });
      throw new AppError('Author not found', HTTP_STATUS.NOT_FOUND);
    }

    author.name = name || author.name;
    author.picture = picture || author.picture;

    await this.authorsRepository.save(author);
  }
}

export default UpdateAuthor;
