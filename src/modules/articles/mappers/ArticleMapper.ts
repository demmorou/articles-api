import ArticleModel from '~infra/database/models/ArticleModel';

import Author from '~modules/authors/domain/Author';
import AuthorMapper from '~modules/authors/mappers/AuthorMapper';

import Article from '../domain/Article';
import ArticleDTO from '../domain/ArticleDTO';

class ArticleMapper {
  static toDomain(raw: ArticleModel): ArticleDTO {
    let author: Author = null;

    if (raw.author) {
      author = AuthorMapper.toDomain(raw.author);
      delete author.id;
    }

    return {
      author,
      category: raw.category,
      title: raw.title,
      summary: raw.summary,
      first_paragraph: raw.first_paragraph,
      body: raw.body,
    };
  }

  static toPersistence(article: ArticleDTO): Article {
    return {
      category: article.category,
      title: article.title,
      summary: article.summary,
      first_paragraph: article.first_paragraph,
      body: article.body,
      author_id: article.author_id,
    };
  }
}

export default ArticleMapper;
