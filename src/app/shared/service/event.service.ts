import {Injectable, OnInit} from '@angular/core';
import {EventModel} from '../model/event-model';

@Injectable()
export class EventService implements OnInit {
  private _events: EventModel[];

  constructor() {
    this._events = EventModel.examplesEvents
      .sort((a: EventModel, b: EventModel) => {
      return b.dateTime.valueOf() - a.dateTime.valueOf();
    });
  }

  set event(value: EventModel) {
    this._events = [
      value,
      ...this._events
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

  eventById(id: number): EventModel {
    const event = this._events.filter(u => u.id === id);
    return event.length > 0 ? event[0] : EventModel.emtyEvent;
  }

  get events(): EventModel[] {
    return this._events;
  }

  ngOnInit(): void {
  }

  sort() {
    this._events
      .sort((a: EventModel, b: EventModel) => {
        return a.dateTime.valueOf() - b.dateTime.valueOf();
      })
      .sort((a: EventModel, b: EventModel) => {
        return a.title === b.title ? 0 : (a.title ? 1 : -1);
      });
  }
}
