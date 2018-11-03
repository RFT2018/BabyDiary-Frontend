import { Component } from '@angular/core';
import {UserService} from '../../../shared/service/user.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import {AppRoutingModule} from '../../../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  alerts: any[] = [];
  routing = new AppRoutingModule();

  constructor(private _users: UserService) {
  }

  login(email: string, password: string) {
    if (!this._users.logIn(email, password)) {
      this.alerts.push({
        type: 'danger',
        msg: `Helytelen belépési adatok!`,
        timeout: 5000
      });
    }
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
