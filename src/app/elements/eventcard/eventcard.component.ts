import {Component, Input, ViewChild} from '@angular/core';
import {EventModel} from '../../shared/model/event-model';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss']
})
export class EventcardComponent {

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
  kinderPicture(id: number): string {
    return './assets/temporary/pictures/kids/' + this.kinderPicFromId(id);
  }
  kinderPicFromId(id: number): string {
    switch (id) {
      case 1:  return 'aae459f8-cd72-4f22-a852-a2551116cc09.png'; break;
      case 2:  return 'ebd511d3-efa8-4983-85af-c6dc0d0c7007.png'; break;
      case 3:  return '3b8d6bbf-2300-4d7a-801c-8e6dfc5fce4e.png'; break;
      case 4:  return 'c0b0eb66-c5f5-4c89-858a-d61ba85a3be6.png'; break;
      case 5:  return 'b679b257-fc2d-4979-9966-c71463d7a37c.png'; break;
      case 6:  return 'c714f189-7a20-4e0e-965f-6268a69d74a5.png'; break;
      default:  return '80f9bbc3-7c19-45fd-8643-01cbba23dd2d.png'; break;
    }
  }
}
