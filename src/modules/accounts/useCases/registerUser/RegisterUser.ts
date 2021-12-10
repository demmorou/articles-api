import { AppContainer } from '~infra/container';
import { Logger } from '~infra/tools/log/types';

import HashHandler from '~handlers/HashHandler';

import IUsersRepository from '../../repositories/IUsersRepository';

type RegisterUserDTO = {
  name: string;
  email: string;
  password: string;
};

class RegisterUser {
  private usersRepository: IUsersRepository;
  private logger: Logger;
  private hashHandler: HashHandler;

  constructor(params: AppContainer) {
    this.usersRepository = params.usersRepository;
    this.logger = params.logger;
    this.hashHandler = params.hashHandler;
  }

  public async execute({
    email,
    name,
    password,
  }: RegisterUserDTO): Promise<void> {
    const hashedPassword = await this.hashHandler.generateHash(password);

    this.logger.info('Saving user');

    await this.usersRepository.create({
      email,
      name,
      password: hashedPassword,
    });
  }
}

export default RegisterUser;
