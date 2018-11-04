import {Component, OnInit} from '@angular/core';
import {EventModel} from '../../shared/model/event-model';
import {EventService} from '../../shared/service/event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  events: EventModel[];
  newEventHide = true;
  newEventButtomText: string;

  constructor(private _eventService: EventService) {
    this.loadEvents();
  }

  loadEvents() {
    this.events = this._eventService.events;
  }

  bodyDivShow() {
    if (this.newEventHide) {
      this.newEventHide = false;
      this.newEventButtomText = 'Vissza';
    } else {
      this.newEventHide = true;
      this.newEventButtomText = 'Új esemény';
    }
    this.loadEvents();
  }
}
