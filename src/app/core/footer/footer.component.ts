import { Component } from '@angular/core';
import {getDate} from 'ngx-bootstrap/chronos/utils/date-getters';
import {Local} from 'protractor/built/driverProviders';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  date = new Date();
}
