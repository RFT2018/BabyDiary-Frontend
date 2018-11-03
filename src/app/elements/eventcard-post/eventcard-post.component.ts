import {Component} from '@angular/core';
import {EventService} from '../../shared/service/event.service';
import {EventModel} from '../../shared/model/event-model';
import {TimelineComponent} from '../../pages/timeline/timeline.component';
import {AlertComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-timeline-post',
  templateUrl: './eventcard-post.component.html',
  styleUrls: ['./eventcard-post.component.scss']
})
export class EventcardPostComponent {

  alerts: any[] = [];
  private _eventDate = new Date();
  eventDateString = this._eventDate.getFullYear().toString() + '-'
    + this.addZero(this._eventDate.getMonth()).toString() + '-'
    + this.addZero(this._eventDate.getDay()).toString() + 'T'
    + this.addZero(this._eventDate.getHours()).toString() + ':'
    + this.addZero(this._eventDate.getMinutes()).toString();
  eventMaxId = 10;

  constructor(private _eventService: EventService) { }

  addEvent(kid: string,
           newEventTitle: string,
           newEventAlles: string,
           newEventDate: string) {
    console.log(kid);
    if (!kid || !newEventTitle || !newEventAlles || !newEventDate) {
      if (kid === 'Válassz...') {
        this.alerts.push({
          type: 'danger',
          msg: `Kérlek, válaszd ki a gyermeket!`,
          timeout: 5000
        });
      }
      if (!newEventTitle) {
        this.alerts.push({
          type: 'danger',
          msg: `Kérlek, add meg az esemény címét!`,
          timeout: 5000
        });
      }
      if (!newEventAlles) {
        this.alerts.push({
          type: 'danger',
          msg: `Kérlek, add meg az esemény részletes leírását!`,
          timeout: 5000
        });
      }
      if (!newEventDate) {
        this.alerts.push({
          type: 'danger',
          msg: `Kérlek, add meg az esemény időpontját!`,
          timeout: 5000
        });
      }
    } else {
      this._eventService.event = new EventModel({
        id: this.eventMaxId,
        kinderId: +kid,
        title: newEventTitle,
        bodyText: newEventAlles,
        dateTime: newEventDate
      });
    }
  }

  private addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
