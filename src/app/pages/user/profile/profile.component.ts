import {Component} from '@angular/core';
import {UserRole} from '../../../shared/enum/user-role.enum';
import {Sex} from '../../../shared/enum/sex.enum';
import {UserModel} from '../../../shared/model/user-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  id: number;
  email: string;
  passsword: string;
  nickName: string;
  userRole: UserRole;
  firstName: string;
  lastName: string;
  sex: Sex;
  dateTime: Date;

  constructor() {
  }
}
