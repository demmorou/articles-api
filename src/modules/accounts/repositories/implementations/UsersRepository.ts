import knex from 'knex';

import knexfile from '~infra/database/knexfile';
import { UserModel } from '~infra/database/models/UserModel';

import UserDTO from '../../domain/UserDTO';
import IUsersRepository from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  constructor() {
    UserModel.knex(knex(knexfile));
  }

  public async create({ email, name, password }: UserDTO): Promise<void> {
    await UserModel.query().insert({ email, name, password });
  }
}

export default UsersRepository;
