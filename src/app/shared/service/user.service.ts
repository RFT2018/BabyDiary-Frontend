import {UserModel} from '../model/user-model';
import {UserRole} from '../enum/user-role.enum';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {Sex} from '../enum/sex.enum';

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
      this._user = this.getUserExamples;
      this._isLoggedIn = true;
      this._router.navigate(['/profile'] );
    }
    return false;
  }

  get user(): UserModel {
    return this._user;
  }

  logOut() {
    delete(this._user);
    this._isLoggedIn = false;
    this._router.navigate(['/'] );
  }

  register(email: string, password: string, nickname?: string) {
    const nick = nickname ? nickname : 'Felhasználó';
    const um = new UserModel();
    um.id = 1;
    um.email = email;
    um.password = password;
    um.nickName = nick;
    um.userRole = UserRole.ADMIN;
    um.sex = Sex.MALE;
    um.dateTime = new Date();
    this._user = um;
    this._isLoggedIn = true;
    this._router.navigate(['/profile'] );
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  getAdminStatus(): boolean {
    return this.isLoggedIn ? this._user.userRole === UserRole.ADMIN : false;
  }

  get getUserExamples(): UserModel {
    const um = new UserModel();
    um.id = 1;
    um.email = 'asdf@asdf.asdf';
    um.password = 'asdf';
    um.nickName = 'Robi';
    um.userRole = UserRole.ADMIN;
    um.firstName = 'T.';
    um.lastName = 'Róbert';
    um.sex = Sex.MALE;
    um.dateTime = new Date('2018-04-01T20:15');
    return um;
  }

  updateDb() {
    /**
     * Ide jön a módosított lokális adatok feltöltése az online adatbázisba.
     */
  }
}
