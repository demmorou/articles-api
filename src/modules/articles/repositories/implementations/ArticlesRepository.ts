import { AppContainer } from '~infra/container';
import { DB } from '~infra/database/models';

import ArticleDTO from '~modules/articles/domain/ArticleDTO';
import ArticleMapper from '~modules/articles/mappers/ArticleMapper';

import IArticlesRepository from '../IArticlesRepository';

class ArticlesRepository implements IArticlesRepository {
  private db: DB;

  constructor(params: AppContainer) {
    this.db = params.db;
  }

  public async create(data: ArticleDTO): Promise<void> {
    const articleToPersistence = ArticleMapper.toPersistence(data);

    await this.db.models.article.query().insert(articleToPersistence);
  }

  public async find(): Promise<ArticleDTO[]> {
    const articles = await this.db.models.article.query().withGraphFetched({
      author: true,
    });

    return articles.map((article) => ArticleMapper.toDomain(article));
  }
}

export default ArticlesRepository;
