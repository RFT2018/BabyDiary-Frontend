import {KidModel} from './kid-model';

export class EventModel {

  private _id: number;
  private _kinder: KidModel;
  private _title: string;
  private _bodyText: string;
  private _dateTime: Date;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get kinder(): KidModel {
    return this._kinder;
  }

  get kinderId(): number {
    return this._kinder.id;
  }

  set kinder(value: KidModel) {
    this._kinder = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get bodyText(): string {
    return this._bodyText;
  }

  set bodyText(value: string) {
    this._bodyText = value;
  }

  get dateTime(): Date {
    return this._dateTime;
  }

  set dateTime(value: Date) {
    this._dateTime = value;
  }

  constructor(param?: EventModel) {
    if (param) {
      Object.assign(this, param);
    }
  }
}
