import knex from 'knex';
import { Model } from 'objection';

import config from '../knexfile';

Model.knex(knex(config));

class BaseModel extends Model {
  readonly id: string;
}

export default BaseModel;
