import { Injectable } from '@angular/core';
import {EventModel} from '../model/event-model';

@Injectable()
export class EventService {
  private _events: EventModel[];
  date = new Date();

  constructor() {
    this._events = this.getEventExamples();
  }

  getAllEvents(): EventModel[] {
    return this._events;
  }

  setAllEvents() {
    this._events = [{
      id: 10,
      kinderId: 10,
      title: '10 Névválasztás',
      bodyText: '10 Eldöntöttük, a neve vagy Tamás vagy Tímea lesz. Ha lány akkor Tamás ... :)',
      dateTime: '2018-01-01T01:05'
    }];
  }

  getEventExamples(): EventModel[] {
    return [{
        id: 3,
        kinderId: 3,
        title: 'Lakástatarozás',
        bodyText: 'Úgy néz ki Lacinak fogják hívni, kékre festjük a szobát.)',
        dateTime: '2018-11-01T21:25'
      }, {
        id: 2,
        kinderId: 3,
        title: 'Tejfakasztó szervezés',
        bodyText: 'Május elseje éppen megfelelne',
        dateTime: '2018-04-01T20:15'
      }, {
        id: 0,
        kinderId: 99,
        title: 'Most',
        bodyText: '',
        dateTime: this.date.toString()
      }, {
        id: 1,
        kinderId: 1,
        title: 'Névválasztás',
        bodyText: 'Eldöntöttük, a neve vagy Tamás vagy Tímea lesz. Ha lány akkor Tamás ... :)',
        dateTime: '2018-01-01T01:05'
      }, {
        id: 0,
        kinderId: 0,
        title: 'Nincs tovább',
        bodyText: '',
        dateTime: ''
      }
    ];
  }
}
