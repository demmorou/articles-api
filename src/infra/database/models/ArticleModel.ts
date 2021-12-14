/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/naming-convention */
import { Model } from 'objection';

import AuthorModel from './AuthorModel';

class ArticleModel extends Model {
  static get modelName(): string {
    return 'article';
  }

  static get tableName(): string {
    return 'articles';
  }

  id: string;
  category: string;
  title: string;
  summary: string;
  first_paragraph: string;
  body: string;
  author_id: string;

  author: AuthorModel;

  static relationMappings = {
    author: {
      modelClass: `${__dirname}/AuthorModel`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'articles.author_id',
        to: 'authors.id',
      },
    },
  };
}

export default ArticleModel;
