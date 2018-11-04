import {Component, OnInit} from '@angular/core';
import {EventModel} from '../../shared/model/event-model';
import {EventService} from '../../shared/service/event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public events: EventModel[];
  newEventHide = true;
  newEventButtomText = 'Új esemény';

  constructor(private _eventService: EventService) {
  }

  loadData() {
    this.events = this._eventService.getAllEvents();
  }

  bodyDivShow() {
    if (this.newEventHide) {
      this.newEventHide = false;
      this.newEventButtomText = 'Vissza';
    } else {
      this.newEventHide = true;
      this.newEventButtomText = 'Új esemény';
    }
    this.loadData();
  }

  ngOnInit(): void {
    this.loadData();
  }
}
