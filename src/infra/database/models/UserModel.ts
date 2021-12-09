/* eslint-disable @typescript-eslint/naming-convention */
import { Model } from 'objection';

export class UserModel extends Model {
  static get tableName(): string {
    return 'users';
  }

  id!: string;
  name!: string;
  email!: string;
  password!: string;
  is_admin!: boolean;
}

export default UserModel;
