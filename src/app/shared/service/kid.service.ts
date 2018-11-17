import { Injectable } from '@angular/core';
import {KidModel} from '../model/kid-model';

@Injectable({
  providedIn: 'root'
})
export class KidService {
  private _kids: KidModel[];

  constructor() {
    this._kids = KidModel.examplesKid
      .sort((a: KidModel, b: KidModel) => {
        return b.birthday.valueOf() - a.birthday.valueOf();
      });
  }

  get kids(): KidModel[] {
    return this._kids;
  }

  set kids(value: KidModel[]) {
    this._kids = value;
  }
}
