import {Component, OnInit} from '@angular/core';
import {EventService} from '../../shared/service/event.service';
import {EventModel} from '../../shared/model/event-model';
import {AlertComponent} from 'ngx-bootstrap';
import {MONTH} from 'ngx-bootstrap/chronos/units/constants';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-timeline-post',
  templateUrl: './eventcard-post.component.html',
  styleUrls: ['./eventcard-post.component.scss']
})
export class EventcardPostComponent implements OnInit {

  constructor(private _eventService: EventService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.onLoad();
  }
  idEvent: number;
  kids = '';
  eventTitle = '';
  eventBody = '';
  idURL = this._route.snapshot.params['id'];
  alerts: any[] = [];
  private _eventMaxId = 110;
  eventDateString = '';

  onLoad() {
    const ev = this._eventService.eventById(+this.idURL);
    const date = ev.dateTime.getFullYear().toString() + '-'
      + addZero(ev.dateTime.getMonth() + 1).toString() + '-'
      + addZero(ev.dateTime.getDate()).toString() + 'T'
      + addZero(ev.dateTime.getHours()).toString() + ':'
      + addZero(ev.dateTime.getMinutes()).toString();
    this.idEvent = ev.id;
    this.kids = ev.kinderId === 0 ? 'Válassz...' : ev.kinderId.toString();
    this.eventTitle = ev.title;
    this.eventBody = ev.bodyText;
    this.eventDateString = date;
  }

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
      this._router.navigate(['/timeline'] );
    }
  }

  modEvent(kid: string,
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
      this._eventService.modEvent = {
        id: this.idEvent,
        kinderId: +kid,
        title: newEventTitle,
        bodyText: newEventAlles,
        dateTime: new Date(newEventDate)
      };
      this._router.navigate(['/timeline'] );
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
