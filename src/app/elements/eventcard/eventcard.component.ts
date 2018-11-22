import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {EventModel} from '../../shared/model/event-model';
import {ModalDirective} from 'ngx-bootstrap';
import {KidModel} from '../../shared/model/kid-model';
import {KidService} from '../../shared/service/kid.service';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss']
})
export class EventcardComponent implements OnInit {

  @ViewChild('childModal') childModal: ModalDirective;
  @Input() esemeny: EventModel;

  constructor() { }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
  smallTitleText(esemeny: EventModel): string {
    return esemeny.title.length > 25 ? esemeny.title.substr(0, 25) + '...' : esemeny.title;
  }
  smallBodyText(esemeny: EventModel): string {
    return esemeny.bodyText.length > 100 ? esemeny.bodyText.substr(0, 100) + '...' : esemeny.bodyText;
  }
  kinderPicture(id: string): string {
    return './assets/temporary/pictures/kids/' + id;
  }

  ngOnInit(): void {
  }
}
