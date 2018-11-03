import { Component } from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {AppRoutingModule} from '../../app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsedMasterMenu = true;
  isCollapsedMasterSec = 0;
  routing = new AppRoutingModule();

  constructor(private userService: UserService) { }

  logOut() {
    this.userService.logOut();
  }

  logInStatus(): boolean {
    return this.userService.getLogInStatus();
  }

  getAdminStatus(): boolean {
    return this.userService.getAdminStatus();
  }
}
