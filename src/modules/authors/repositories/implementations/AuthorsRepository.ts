import { AppContainer } from '~infra/container';
import { DB } from '~infra/database/models';

import Author from '~modules/authors/domain/Author';
import AuthorMapper from '~modules/authors/mappers/AuthorMapper';

import AuthorDTO from '../../domain/AuthorDTO';
import IAuthorsRepository from '../IAuthorsRepository';

class AuthorsRepository implements IAuthorsRepository {
  private db: DB;

  constructor(params: AppContainer) {
    this.db = params.db;
  }

  public async create({ name, picture }: AuthorDTO): Promise<void> {
    const authorToPersistence = AuthorMapper.toPersistence({ name, picture });

    await this.db.models.author.query().insert(authorToPersistence);
  }

  public async findById(id: string): Promise<Author> {
    const author = await this.db.models.author.query().findById(id);

    return AuthorMapper.toDomain(author);
  }

  public async delete(id: string): Promise<void> {
    await this.db.models.author.query().deleteById(id);
  }

  public async save(author: Author): Promise<void> {
    const authorToPersistence = AuthorMapper.toPersistence(author);

    await this.db.models.author.query().update(authorToPersistence);
  }
}

export default AuthorsRepository;
