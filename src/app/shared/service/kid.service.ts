import {Injectable, OnInit} from '@angular/core';
import { KidModel } from '../model/kid-model';
import { Sex } from '../enum/sex.enum';
import { HttpClient } from '@angular/common/http';;
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KidService implements OnInit {
  private _date: Date;
  private _kids: KidModel[];

  constructor(private _http: HttpClient) {
    this._date = new Date();
    this._kids = [this.emtyKid];
  }

  getAllKidByFirebaseio(): Observable<KidModel[]> {
    return this._http.get<KidModel[]>(`${environment.firebase.baseUrl}/kid.json`)
      .pipe(
        map(data => Object.values(data))
      );
  }

  kidById(id: number): KidModel {
    const kid = this._kids.filter(u => u.id === id);
    return kid.length > 0 ? kid[0] : this.emtyKid;
  }

  get kids(): KidModel[] {
    return this._kids;
  }

  set kid(value: KidModel) {
    this._kids = [
      value,
      ...this._kids
    ];
  }

  set kids(value: KidModel[]) {
    this._kids = value;
  }

  set modKid(value: KidModel) {
    const kidAll = this._kids.filter(u => u.id !== value.id);
    this._kids = [
      value,
      ...kidAll
    ];
  }

  get emtyKid(): KidModel {
    const km = new KidModel();
    km.id = 1;
    km.birthday = new Date();
    km.name = '?';
    km.sex = Sex.MALE;
    km.height = '0';
    km.weight = '0';
    km.conception = '0';
    km.picture = 'ed8bd06e-8034-4163-a9d5-7b589565c100.png';
    return km;
  }

  ngOnInit(): void {
  }
}
