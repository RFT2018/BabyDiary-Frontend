import {Component, OnInit} from '@angular/core';
import {EventService} from '../../shared/service/event.service';
import {EventModel} from '../../shared/model/event-model';
import {AlertComponent} from 'ngx-bootstrap';
import {MONTH} from 'ngx-bootstrap/chronos/units/constants';

@Component({
  selector: 'app-timeline-post',
  templateUrl: './eventcard-post.component.html',
  styleUrls: ['./eventcard-post.component.scss']
})
export class EventcardPostComponent implements OnInit {

  constructor(private _eventService: EventService) { }

  alerts: any[] = [];
  private _eventMaxId = 110;
  private _eventDate = new Date();
  eventDateString = this._eventDate.getFullYear().toString() + '-'
    + addZero(this._eventDate.getMonth() + 1).toString() + '-'
    + addZero(this._eventDate.getDate()).toString() + 'T'
    + addZero(this._eventDate.getHours()).toString() + ':'
    + addZero(this._eventDate.getMinutes()).toString();

  addEvent(kid: string,
           newEventTitle: string,
           newEventAlles: string,
           newEventDate: string) {
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
      this._eventService.event = {
        id: this._eventMaxId,
        kinderId: +kid,
        title: newEventTitle,
        bodyText: newEventAlles,
        dateTime: new Date(newEventDate)
      };
    }
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  ngOnInit(): void {
  }
}

function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
