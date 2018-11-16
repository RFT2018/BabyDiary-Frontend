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
      bodyText: 'Úgy néz ki Lacinak fogják hívni, kékre festjük a szobát.) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium mi vel eros malesuada, ac tincidunt nisl condimentum. Nunc sed ipsum sed tellus ultrices cursus sed gravida tortor. Nullam ac volutpat lorem. Mauris eleifend non magna non sollicitudin. Aenean vestibulum imperdiet eros, vitae malesuada enim vehicula a. Praesent enim sem, vehicula in laoreet ac, mattis nec metus. Nunc semper vitae turpis quis dignissim. Sed ornare mi at augue consequat facilisis quis at risus. Aliquam dolor nisi, lobortis in magna a, laoreet accumsan enim. In commodo orci non nunc congue rutrum. Integer aliquet, orci porta aliquam varius, eros magna euismod tortor, vel interdum turpis urna vitae felis. In ipsum mauris, eleifend et pellentesque a, tempus at eros. Vivamus sed massa odio. Ut consectetur id massa pretium pretium. Ut eu metus congue, dignissim nunc et, hendrerit arcu. Mauris vitae mattis urna, sit amet porta libero.',
      dateTime:  new Date('2018-11-01T21:25:00')
    }, {
      id: 2,
      kinderId: 3,
      title: 'Tejfakasztó szervezés',
      bodyText: 'Május elseje éppen megfelelne Aliquam lobortis vulputate lectus id maximus. Integer sodales imperdiet massa. Aliquam dignissim, sem sed laoreet blandit, lectus erat bibendum lectus, id placerat turpis tellus sit amet odio. Maecenas mollis molestie nibh. Vestibulum in blandit felis. Vestibulum sem ante, sodales quis quam vitae, vulputate consectetur lectus. Mauris ut vehicula tellus. Vestibulum interdum, tortor non bibendum mattis, purus mauris ultricies lorem, quis posuere eros erat eu tellus. Ut sagittis molestie enim at pulvinar. Donec quis molestie lacus, in eleifend lectus. Ut finibus est nec arcu facilisis, sit amet ullamcorper dolor commodo. Nam ullamcorper lectus non lectus luctus, non maximus lorem interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut euismod purus. Proin in purus tincidunt quam facilisis sollicitudin vitae non sem. Nullam arcu massa, convallis id arcu et, vestibulum pretium purus.',
      dateTime:  new Date('2018-04-01T20:15')
    }, {
      id: -1,
      kinderId: 0,
      title: 'Most',
      bodyText: '',
      dateTime:  new Date(_now.toString())
    }, {
      id: 1,
      kinderId: 1,
      title: 'Névválasztás',
      bodyText: 'Eldöntöttük, a neve vagy Tamás vagy Tímea lesz. Ha lány akkor Tamás ... :) Aliquam id enim efficitur, auctor tortor eget, pulvinar leo. Integer scelerisque, nisi eu bibendum faucibus, elit orci maximus libero, et lacinia eros lectus vitae urna. Donec nec pharetra diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla quis lorem eu lacus condimentum efficitur. Nunc placerat mi quis elit luctus porttitor. Ut quis gravida metus.',
      dateTime:  new Date('2018-01-01T01:05')
    }, {
      id: -2,
      kinderId: 0,
      title: 'Nincs tovább',
      bodyText: '',
      dateTime:  new Date('2000-01-01T00:00')
    }
    ];
  }
}
