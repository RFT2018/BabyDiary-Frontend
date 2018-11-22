import {Component, OnInit} from '@angular/core';
import {EventModel} from '../../shared/model/event-model';
import {EventService} from '../../shared/service/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {KidModel} from '../../shared/model/kid-model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  events: EventModel[];
  onlineEvents: EventModel[];
  newEventButtomText: string;
  idURL = this._route.snapshot.params['id'];

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _eventService: EventService) {
    this.loadEvents();
  }

  loadEvents() {
    this.events = this._eventService.events;
    if (this.idURL) {
      this.newEventButtomText = 'Vissza';
    } else {
      this.newEventButtomText = 'Új esemény';
    }
  }

  bodyDivShow() {
    if (this.idURL) {
      this._router.navigate(['/timeline'] );
    } else {
      this._router.navigate(['/timeline/0/edit'] );
    }
  }

  ngOnInit(): void {
    this._eventService.getAllEventByFirebaseio().subscribe(data => {
      this.onlineEvents = data;
    });
  }
}
