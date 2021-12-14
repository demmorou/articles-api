import ArticleDTO from '../domain/ArticleDTO';

interface IArticlesRepository {
  create(data: ArticleDTO): Promise<void>;
  find(): Promise<ArticleDTO[]>;
}

export default IArticlesRepository;
