import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {

  title = 'app';
  show = true;
  inputContent = 'tesztüzenet';
  events = ['sziget', 'efot', 'fezen'];
  toggle() {
    this.show = !this.show;
  }
  demo(ev: MouseEvent) {
    console.log(ev);
  }
}
