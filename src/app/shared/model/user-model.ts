import {Sex} from '../enum/sex.enum';
import {UserRole} from '../enum/user-role.enum';

export class UserModel {
  id: number;
  email: string;
  passsword: string;
  nickName: string;
  userRole: UserRole;
  firstName: string;
  lastName: string;
  sex: Sex;
  dateTime: Date;
  constructor(param?: UserModel) {
    if (param) {
      Object.assign(this, param);
    }
  }
}
