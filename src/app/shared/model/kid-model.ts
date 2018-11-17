import {Sex} from '../enum/sex.enum';
import {FunfactModel} from './funfact-model';
import {EventModel} from './event-model';

export class KidModel {
  id: number;
  birthday: Date;
  name: string;
  sex: Sex;
  height: string;
  weight: string;
  conception: string;
  picture: string;
  constructor(param?: KidModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

  static get emtyKid(): KidModel {
    return {
      id: 0,
      birthday: new Date(),
      name: 'Pisti',
      sex: Sex.MALE,
      height: '',
      weight: '',
      conception: '',
      picture: '80f9bbc3-7c19-45fd-8643-01cbba23dd2d.png'
    };
  }

  static get examplesKid(): KidModel[] {
    return [{
      id: 1,
      birthday: new Date('2018-04-01T20:15'),
      name: 'Kati',
      sex: Sex.FEMALE,
      height: '61',
      weight: '51',
      conception: '41',
      picture: 'aae459f8-cd72-4f22-a852-a2551116cc09.png'
    }, {
      id: 2,
      birthday: new Date('2016-08-01T20:15'),
      name: 'Tomi',
      sex: Sex.MALE,
      height: '62',
      weight: '52',
      conception: '42',
      picture: 'ebd511d3-efa8-4983-85af-c6dc0d0c7007.png'
    }, {
      id: 3,
      birthday: new Date('2013-02-01T20:15'),
      name: 'Zoli',
      sex: Sex.MALE,
      height: '63',
      weight: '53',
      conception: '43',
      picture: '3b8d6bbf-2300-4d7a-801c-8e6dfc5fce4e.png'
    }, {
      id: 4,
      birthday: new Date('2010-10-01T20:15'),
      name: 'Évi',
      sex: Sex.FEMALE,
      height: '64',
      weight: '54',
      conception: '44',
      picture: 'c0b0eb66-c5f5-4c89-858a-d61ba85a3be6.png'
    }, {
      id: 5,
      birthday: new Date('2006-01-01T20:15'),
      name: 'Laci',
      sex: Sex.MALE,
      height: '65',
      weight: '55',
      conception: '45',
      picture: 'b679b257-fc2d-4979-9966-c71463d7a37c.png'
    }, {
      id: 6,
      birthday: new Date('2013-01-01T20:15'),
      name: 'Sanyi',
      sex: Sex.MALE,
      height: '66',
      weight: '56',
      conception: '46',
      picture: 'c714f189-7a20-4e0e-965f-6268a69d74a5.png'
    }];
  }
}
