import {UserModel} from '../model/user-model';
import {UserRole} from '../enum/user-role.enum';
import {Sex} from '../enum/sex.enum';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: UserModel;
  private _date: Date;
  private _isLoggedIn = false;

  constructor(private _router: Router) {
    this._date = new Date();
  }

  logIn(email: string, password: string): boolean {
    if (email === 'asdf' && password === 'asdf') {
      this._user = this.getUserExamples();
      this._isLoggedIn = true;
      this._router.navigate(['/timeline'] );
    }
    return false;
  }

  logOut() {
    delete(this._user);
    this._isLoggedIn = false;
    this._router.navigate([''] );
  }

  getLogInStatus(): boolean {
    return this._isLoggedIn;
  }

  getAdminStatus(): boolean {
    return this._user.userRole === UserRole.ADMIN;
  }

  getUserExamples(): UserModel {
    return {
      id: 1,
      email: 'asdf@asdf.asdf',
      passsword: 'asdf',
      nickName: 'Robi',
      userRole: UserRole.PARENT,
      firstName: 'T.',
      lastName: 'Róbert',
      sex: Sex.MALE,
      dateTime: new Date('2018-04-01T20:15')
    };
  }
}
