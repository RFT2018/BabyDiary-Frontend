import {Sex} from '../enum/sex.enum';
import {UserRole} from '../enum/user-role.enum';

export class UserModel {
  id: number;
  email: string;
  password: string;
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

  static get getUserExamples(): UserModel {
    return {
      id: 1,
      email: 'asdf@asdf.asdf',
      password: 'asdf',
      nickName: 'Robi',
      userRole: UserRole.PARENT,
      firstName: 'T.',
      lastName: 'Róbert',
      sex: Sex.MALE,
      dateTime: new Date('2018-04-01T20:15')
    };
  }
}
