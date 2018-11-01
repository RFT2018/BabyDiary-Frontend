import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-post',
  templateUrl: './timeline-post.component.html',
  styleUrls: ['./timeline-post.component.scss']
})
export class TimelinePostComponent {
  eventDate = new Date();
  eventDateString = this.eventDate.getFullYear().toString() + '-'
    + this.eventDate.getMonth().toString() + '-0'
    + this.eventDate.getDay().toString() + 'T0'
    + this.eventDate.getHours().toString() + ':'
    + this.eventDate.getMinutes().toString();
  eventDateStringR = this.eventDateString
    .replace('-00', '-0')
    .replace('T00', 'T0')
    .replace(':00', ':0')

  constructor() {
  }
  newEventHide = true;
  newEventButtomText = 'Új esemény';
  bodyDivShow() {
    if (this.newEventHide) {
      this.newEventHide = false;
      this.newEventButtomText = 'Mégsem';
    } else {
      this.newEventHide = true;
      this.newEventButtomText = 'Új esemény';
    }
  }
  addEvent(newEventTitle: HTMLInputElement,
           newEventAlles: HTMLInputElement,
           newEventDate: HTMLInputElement) {
    console.log(newEventTitle.value);
    console.log(newEventAlles.value);
    console.log(newEventDate.value);
  }

}
