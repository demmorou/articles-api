import { AppContainer } from '~infra/container';
import AppError from '~infra/errors/AppError';

import HTTP_STATUS from '~core/http/HttpStatus';
import HashHandler from '~handlers/HashHandler';
import JwtHandler from '~handlers/JwtHandler';

import IUsersRepository from '../../repositories/IUsersRepository';
import { AuthenticateUserInput, AuthenticateUserOutput } from './types';

class AuthenticateUser {
  private usersRepository: IUsersRepository;
  private hashHandler: HashHandler;
  private jwtHandler: JwtHandler;

  constructor(params: AppContainer) {
    this.usersRepository = params.usersRepository;
    this.hashHandler = params.hashHandler;
  }

  public async execute({
    email,
    password,
  }: AuthenticateUserInput): Promise<AuthenticateUserOutput> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Invalid credentials!', HTTP_STATUS.UNAUTHORIZED);
    }

    const passwordIsEqualToHash = await this.hashHandler.compareHash(
      password,
      user.password,
    );

    if (!passwordIsEqualToHash) {
      throw new AppError('Invalid credentials!', HTTP_STATUS.UNAUTHORIZED);
    }

    const accessToken = this.jwtHandler.sign(user.id, {
      is_admin: user.isAdmin,
    });

    return {
      access_token: accessToken,
    };
  }
}

export default AuthenticateUser;
