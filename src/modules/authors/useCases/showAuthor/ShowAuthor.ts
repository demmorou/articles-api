import { AppContainer } from '~infra/container';
import AppError from '~infra/errors/AppError';
import { Logger } from '~infra/tools/log/types';

import HTTP_STATUS from '~core/http/HttpStatus';
import AuthorDTO from '~modules/authors/domain/AuthorDTO';
import IAuthorsRepository from '~modules/authors/repositories/IAuthorsRepository';

class ShowAuthor {
  private authorsRepository: IAuthorsRepository;
  private logger: Logger;

  constructor(params: AppContainer) {
    this.authorsRepository = params.authorsRepository;
    this.logger = params.logger;
  }

  public async execute(id: string): Promise<AuthorDTO> {
    this.logger.info('Looking author by id', { id });
    const author = await this.authorsRepository.findById(id);

    if (!author) {
      this.logger.info('Author not found by id', { id });
      throw new AppError('Author not found', HTTP_STATUS.NOT_FOUND);
    }

    this.logger.info('Author found', { author });

    return author;
  }
}

export default ShowAuthor;
