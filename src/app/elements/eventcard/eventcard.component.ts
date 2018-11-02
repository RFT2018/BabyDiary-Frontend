import {Component, Input} from '@angular/core';
import {EventModel} from '../../shared/model/event-model';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss']
})
export class EventcardComponent {
  @Input() esemeny: EventModel;

  constructor() { }
}
