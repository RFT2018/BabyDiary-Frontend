import {Component} from '@angular/core';
import {EventModel} from '../../shared/model/event-model';
import {EventService} from '../../shared/service/event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  public events: EventModel[];
  newEventHide = true;
  newEventButtomText = 'Új esemény';

  constructor(private _eventService: EventService) {
    this.events = this._eventService.getAllEvents();
  }
  bodyDivShow() {
    if (this.newEventHide) {
      this.newEventHide = false;
      this.newEventButtomText = 'Mégsem';
    } else {
      this.newEventHide = true;
      this.newEventButtomText = 'Új esemény';
    }
  }
}
