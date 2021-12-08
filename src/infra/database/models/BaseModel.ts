import { Model } from 'objection';

class BaseModel extends Model {
  readonly id: string;
}

export default BaseModel;
