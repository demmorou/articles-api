/* eslint-disable @typescript-eslint/naming-convention */
import { Model } from 'objection';

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
}

export default AuthorModel;
