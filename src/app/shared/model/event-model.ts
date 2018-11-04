export class EventModel {
  id: number;
  kinderId: number;
  title: string;
  bodyText: string;
  dateTime: Date;
  constructor(param?: EventModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

  static get emtyEvent(): EventModel {
    return {
      id: 0,
      kinderId: 0,
      title: '',
      bodyText: '',
      dateTime: new Date()
    };
  }

  static get examplesEvents(): EventModel[] {
    const _now = new Date();
    return [{
      id: 3,
      kinderId: 3,
      title: 'Lakástatarozás',
      bodyText: 'Úgy néz ki Lacinak fogják hívni, kékre festjük a szobát.)',
      dateTime:  new Date('2018-11-01T21:25:00')
    }, {
      id: 2,
      kinderId: 3,
      title: 'Tejfakasztó szervezés',
      bodyText: 'Május elseje éppen megfelelne',
      dateTime:  new Date('2018-04-01T20:15')
    }, {
      id: 0,
      kinderId: 99,
      title: 'Most',
      bodyText: '',
      dateTime:  new Date(_now.toString())
    }, {
      id: 1,
      kinderId: 1,
      title: 'Névválasztás',
      bodyText: 'Eldöntöttük, a neve vagy Tamás vagy Tímea lesz. Ha lány akkor Tamás ... :)',
      dateTime:  new Date('2018-01-01T01:05')
    }, {
      id: 0,
      kinderId: 0,
      title: 'Nincs tovább',
      bodyText: '',
      dateTime:  new Date('')
    }
    ];
  }
}
