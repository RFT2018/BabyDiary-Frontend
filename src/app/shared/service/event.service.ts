import {Injectable, OnInit} from '@angular/core';
import {EventModel} from '../model/event-model';

@Injectable()
export class EventService implements OnInit {
  private _events: EventModel[];

  constructor() {
    this._events = EventModel.examplesEvents;
  }

  set event(value: EventModel) {
    this._events = [
      value,
      ...this._events
    ];
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
}
