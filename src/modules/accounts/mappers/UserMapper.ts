import UserModel from '~infra/database/models/UserModel';

import User from '../domain/User';
import UserDTO from '../domain/UserDTO';

class UserMapper {
  static toDomain(raw: UserModel): User {
    return {
      id: raw.id,
      name: raw.name,
      email: raw.email,
      password: raw.password,
      isAdmin: raw.is_admin,
    };
  }

  static toPersistence(user: User): UserDTO {
    return {
      id: user.id,
      name: user.name,
      is_admin: user.isAdmin,
      email: user.email,
      password: user.password,
    };
  }
}

export default UserMapper;
