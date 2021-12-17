import ArticleDTO from '../domain/ArticleDTO';

interface IArticlesRepository {
  create(data: ArticleDTO): Promise<void>;
  find(category: string): Promise<ArticleDTO[]>;
  findById(id: string): Promise<ArticleDTO>;
  delete(id: string): Promise<void>;
}

export default IArticlesRepository;
