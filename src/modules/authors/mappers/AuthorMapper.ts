import AuthorModel from '~infra/database/models/AuthorModel';

import Author from '../domain/Author';
import AuthorDTO from '../domain/AuthorDTO';

class AuthorMapper {
  static toDomain(raw: AuthorModel): AuthorDTO {
    if (!raw) return null;

    return {
      id: raw?.id,
      name: raw?.name,
      picture: raw?.picture,
    };
  }

  static toPersistence(user: AuthorDTO): Author {
    return {
      id: user?.id,
      name: user.name,
      picture: user.picture,
    };
  }
}

export default AuthorMapper;
