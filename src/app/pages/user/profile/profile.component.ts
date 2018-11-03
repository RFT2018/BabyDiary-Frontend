import {Component} from '@angular/core';
import {UserRole} from '../../../shared/enum/user-role.enum';
import {Sex} from '../../../shared/enum/sex.enum';
import {UserModel} from '../../../shared/model/user-model';
import {Router} from '@angular/router';
import {UserService} from '../../../shared/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private _id: number;
  private _email: string;
  private _password: string;
  private _nickName: string;
  private _userRole: UserRole;
  private _firstName: string;
  private _lastName: string;
  private _sex: Sex;
  private _dateTime: Date;

  constructor(private _userService: UserService) {
    if (this._userService.getLogInStatus()) {
      this._id = _userService.getUserExamples.id;
      this._email = _userService.getUserExamples.email;
      this._nickName = _userService.getUserExamples.nickName;
      this._userRole = _userService.getUserExamples.userRole;
      this._firstName = _userService.getUserExamples.firstName;
      this._lastName = _userService.getUserExamples.lastName;
      this._sex = _userService.getUserExamples.sex;
      this._dateTime = _userService.getUserExamples.dateTime;
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get nickName(): string {
    return this._nickName;
  }

  set nickName(value: string) {
    this._nickName = value;
  }

  get userRole(): UserRole {
    return this._userRole;
  }

  set userRole(value: UserRole) {
    this._userRole = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get sex(): Sex {
    return this._sex;
  }

  set sex(value: Sex) {
    this._sex = value;
  }

  get dateTime(): Date {
    return this._dateTime;
  }

  set dateTime(value: Date) {
    this._dateTime = value;
  }
}
