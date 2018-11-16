import {Component} from '@angular/core';
import {UserService} from '../../../shared/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private _userService: UserService) { }
  get userService(): UserService {
    return this._userService;
  }
  onSubmit(form) {
    console.log('mod');
  }
}
