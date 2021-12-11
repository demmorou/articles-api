import { AppContainer } from '~infra/container';

import IAuthorsRepository from '../../repositories/IAuthorsRepository';
import { RegisterAuthorInput } from './types';

class RegisterAuthor {
  private authorsRepository: IAuthorsRepository;

  constructor(params: AppContainer) {
    this.authorsRepository = params.authorsRepository;
  }

  public async execute({ name, picture }: RegisterAuthorInput): Promise<void> {
    await this.authorsRepository.create({ name, picture });
  }
}

export default RegisterAuthor;
