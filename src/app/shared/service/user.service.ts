import {UserModel} from '../model/user-model';
import {UserRole} from '../enum/user-role.enum';
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
      this._user = new UserModel(UserModel.getUserExamples);
      this._isLoggedIn = true;
      this._router.navigate(['timeline'] );
    }
    return false;
  }

  logOut() {
    delete(this._user);
    this._isLoggedIn = false;
    this._router.navigate(['/login'] );
  }

  register(param?: UserModel) {
    if (param) {
      this._user = new UserModel(param);
    } else {
      this._user = new UserModel(UserModel.getUserExamples);
    }
    this._isLoggedIn = true;
    this._router.navigate(['profile'] );
  }

  getLogInStatus(): boolean {
    return this._isLoggedIn;
  }

  getAdminStatus(): boolean {
    return this._isLoggedIn ? this._user.userRole === UserRole.ADMIN : false;
  }
}
