import { AppContainer } from '~infra/container';
import { DB } from '~infra/database/models';

import UserMapper from '~modules/accounts/mappers/UserMapper';

import UserDTO from '../../domain/UserDTO';
import IUsersRepository from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private db: DB;

  constructor(params: AppContainer) {
    this.db = params.db;
  }

  public async create({ email, name, password }: UserDTO): Promise<void> {
    const userToPersistence = UserMapper.toPersistence({
      email,
      name,
      password,
    });

    await this.db.models.user.query().insert(userToPersistence);
  }

  public async findByEmail(email: string): Promise<UserDTO> {
    const user = await this.db.models.user.query().findOne('email', email);

    return UserMapper.toDomain(user);
  }
}

export default UsersRepository;
