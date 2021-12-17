import { raw } from 'objection';

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

  public async find(category: string): Promise<ArticleDTO[]> {
    let articles: any[] = [];

    if (!category) {
      articles = await this.db.models.article.query().withGraphFetched({
        author: true,
      });

      return articles.map((article) => ArticleMapper.toDomain(article));
    }

    articles = await this.db.models.article
      .query()
      .withGraphFetched({
        author: true,
      })
      .where({ category });

    return articles.map((article) => ArticleMapper.toDomain(article));
  }

  public async findById(id: string): Promise<ArticleDTO> {
    const article = await this.db.models.article
      .query()
      .findById(id)
      .withGraphFetched({ author: true });

    return ArticleMapper.toDomain(article);
  }

  public async delete(id: string): Promise<void> {
    await this.db.models.article.query().delete().where({ id });
  }
}

export default ArticlesRepository;
