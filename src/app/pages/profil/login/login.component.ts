import { Component } from '@angular/core';
import {UserService} from '../../../shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _users: UserService) { }

  login(email: string, password: string) {
    console.log(email + ' / ' + password)
    this._users.logIn(email, password);
  }
}
