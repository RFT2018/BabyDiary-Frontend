import {Component} from '@angular/core';

@Component({
  selector: 'app-timeline-post',
  templateUrl: './timeline-post.component.html',
  styleUrls: ['./timeline-post.component.scss']
})
export class TimelinePostComponent {
  eventDate = new Date();
  eventDateString = this.eventDate.getFullYear().toString() + '-'
    + addZero(this.eventDate.getMonth()).toString() + '-'
    + addZero(this.eventDate.getDay()).toString() + 'T'
    + addZero(this.eventDate.getHours()).toString() + ':'
    + addZero(this.eventDate.getMinutes()).toString();

  constructor() { }
  addEvent(newEventTitle: HTMLInputElement,
           newEventAlles: HTMLInputElement,
           newEventDate: HTMLInputElement) {
    console.log(newEventTitle.value);
    console.log(newEventAlles.value);
    console.log(newEventDate.value);
  }
}

function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
