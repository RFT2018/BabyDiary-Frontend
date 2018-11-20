import {Sex} from '../enum/sex.enum';
import {FunfactModel} from './funfact-model';
import {EventModel} from './event-model';

export class KidModel {

  private _id: number;
  private _birthday: Date;
  private _name: string;
  private _sex: Sex;
  private _height: string;
  private _weight: string;
  private _conception: string;
  private _picture: string;

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

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
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

  get conception(): string {
    return this._conception;
  }

  set conception(value: string) {
    this._conception = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  constructor(param?: KidModel) {
    if (param) {
      Object.assign(this, param);
    }
  }
}
