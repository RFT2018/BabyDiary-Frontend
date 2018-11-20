import {Injectable, OnInit} from '@angular/core';
import {EventModel} from '../model/event-model';
import {KidService} from './kid.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventService implements OnInit {

  private _events: EventModel[];

  constructor(private _router: Router,
              private _kidService: KidService,
              private _http: HttpClient) {
    this.sortEvents();
  }

  getAllEventByFirebaseio(): Observable<EventModel[]> {
    return this._http.get<EventModel[]>(`${environment.firebase.baseUrl}/event.json`)
      .pipe(
        map(data => Object.values(data))
      );
  }

  sortEvents(): void {
    if (this._events != null) {
      this._events = this._events.sort((a: EventModel, b: EventModel) => {
        return b.dateTime.valueOf() - a.dateTime.valueOf();
      });
      console.log(this._events);
    }
  }

  eventById(id: number): EventModel {
    const event = this._events.filter(u => u.id === id);
    return event.length > 0 ? event[0] : this.emtyEvent;
  }

  get events(): EventModel[] {
    return this._events;
  }

  set event(value: EventModel) {
    this._events = [
      value,
      ...this._events
    ];
  }

  addEventByTag(_id: number,
                _kinder: number,
                _title: string,
                _bodyText: string,
                _dateTime: Date) {
    const em = new EventModel();
    em.id = _id;
    em.kinder = this._kidService.kidById(_kinder);
    em.title = _title;
    em.bodyText = _bodyText;
    em.dateTime = new Date(_dateTime);
    this._events = [
      em,
      ...this._events
    ];
    this.sortEvents();
  }

  setEventByTag(_id: number,
                _kinder: number,
                _title: string,
                _bodyText: string,
                _dateTime: Date) {
    const em = new EventModel();
    em.id = _id;
    em.kinder = this._kidService.kidById(_kinder);
    em.title = _title;
    em.bodyText = _bodyText;
    em.dateTime = new Date(_dateTime);
    const eventAll = this._events.filter(u => u.id !== em.id);
    this._events = [
      em,
      ...eventAll
    ].sort((a: EventModel, b: EventModel) => {
      return b.dateTime.valueOf() - a.dateTime.valueOf();
    });
  }

  set modEvent(value: EventModel) {
    const eventAll = this._events.filter(u => u.id !== value.id);
    this._events = [
      value,
      ...eventAll
    ].sort((a: EventModel, b: EventModel) => {
      return b.dateTime.valueOf() - a.dateTime.valueOf();
    });
  }

  get emtyEvent(): EventModel {
    const em = new EventModel();
    em.id = 1;
    em.kinder = this._kidService.emtyKid;
    em.title = '';
    em.bodyText = '';
    em.dateTime = new Date();
    return em;
  }

  loginEvent(): void {
    const em = new EventModel();
    em.id = 1;
    em.kinder = this._kidService.emtyKid;
    em.title = 'Utoljára belépett';
    em.bodyText = '';
    em.dateTime = new Date();
    this._events = [em];
  }

  get maxEventId(): number {
    if (this._events) {
      return  this._events.reduce((x, y) => x.id > y.id ? x : y).id;
    } else {
      return  1;
    }
  }

  ngOnInit(): void {
  }
}
