import {Sex} from '../enum/sex.enum';
import {FunfactModel} from './funfact-model';
import {EventModel} from './event-model';

export class KidModel {

  private _id: number;
  private _birthday: Date;
  private _firstName: string;
  private _lastName: string;
  private _sex: Sex;
  private _conception: Date;
  private _height: string;
  private _weight: string;
  private _albums: number[];

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get albums(): number[] {
    return this._albums;
  }

  set albums(value: number[]) {
    this._albums = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(value: Date) {
    this._birthday = value;
  }

  get sex(): Sex {
    return this._sex;
  }

  set sex(value: Sex) {
    this._sex = value;
  }

  get height(): string {
    return this._height;
  }

  set height(value: string) {
    this._height = value;
  }

  get weight(): string {
    return this._weight;
  }

  set weight(value: string) {
    this._weight = value;
  }

  get conception(): Date {
    return this._conception;
  }

  set conception(value: Date) {
    this._conception = value;
  }

  constructor(param?: KidModel) {
    if (param) {
      Object.assign(this, param);
    }
  }
}
