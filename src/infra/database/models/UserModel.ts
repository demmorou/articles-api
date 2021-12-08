/* eslint-disable @typescript-eslint/naming-convention */
import BaseModel from './BaseModel';

class UserModel extends BaseModel {
  static tableName = 'users';

  name: string;
  email: string;
  password: string;
  is_admin: boolean;
}

export default UserModel;
