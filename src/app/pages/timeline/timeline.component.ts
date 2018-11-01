import { Component } from '@angular/core';

export class EventModel {
  id: number;
  kinderId: number;
  title: string;
  bodyText: string;
  dateTime: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  events: EventModel[];

  constructor() {
    this.events = [{
        id: 3,
        kinderId: 3,
        title: 'Lakástatarozás',
        bodyText: 'Úgy néz ki Lacinak fogják hívni, kékre festjük a szobát.)',
        dateTime: 'juni. 12.'
      }, {
        id: 2,
        kinderId: 3,
        title: 'Tejfakasztó szervezés',
        bodyText: 'Május elseje éppen megfelelne',
        dateTime: 'márc. 10.'
      }, {
        id: 1,
        kinderId: 1,
        title: 'Névválasztás',
        bodyText: 'Eldöntöttük, a neve vagy Tamás vagy Tímea lesz. Ha lány akkor Tamás ... :)',
        dateTime: 'jan. 1.'
      }, {
        id: 0,
        kinderId: 0,
        title: 'Nincs tovább',
        bodyText: '',
        dateTime: ''
      }
    ];
  }
}
