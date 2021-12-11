import { AppContainer } from '~infra/container';
import { Logger } from '~infra/tools/log/types';

import IAuthorsRepository from '~modules/authors/repositories/IAuthorsRepository';

class DeleteAuthor {
  private authorsRepository: IAuthorsRepository;
  private logger: Logger;

  constructor(params: AppContainer) {
    this.authorsRepository = params.authorsRepository;
    this.logger = params.logger;
  }

  public async execute(id: string): Promise<void> {
    this.logger.info('Deleting author by id', { id });
    await this.authorsRepository.delete(id);
  }
}

export default DeleteAuthor;
