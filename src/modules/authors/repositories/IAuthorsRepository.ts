import Author from '../domain/Author';
import AuthorDTO from '../domain/AuthorDTO';

interface IAuthorsRepository {
  create(data: AuthorDTO): Promise<void>;
  findById(id: string): Promise<Author>;
  delete(id: string): Promise<void>;
  save(author: Author): Promise<void>;
}

export default IAuthorsRepository;
