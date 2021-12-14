/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/naming-convention */
import { Model } from 'objection';

import Article from '~modules/articles/domain/Article';

class AuthorModel extends Model {
  static get modelName(): string {
    return 'author';
  }

  static get tableName(): string {
    return 'authors';
  }

  id: string;
  name: string;
  picture: string;

  articles: Article[];

  static relationMappings = {
    articles: {
      modelClass: `${__dirname}/ArticleModel`,
      relation: Model.HasManyRelation,
      join: {
        from: 'authors.id',
        to: 'articles.id',
      },
    },
  };
}

export default AuthorModel;
