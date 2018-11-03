import { Component } from '@angular/core';
import {UserService} from '../../../shared/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private _userService: UserService) { }

  register(email: string, password: string, nickname?: string) {
    this._userService.register(email, password, nickname);
  }
}
