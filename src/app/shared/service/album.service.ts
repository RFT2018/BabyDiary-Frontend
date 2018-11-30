import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {AlbumModel} from '../model/album-model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _mail = '';
  private _pass = '';

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) {
    this._mail = _userService.user.email;
    this. _pass = _userService.user.password;
  }

  getAll(): Observable<AlbumModel[]> {
    const url = '/album/get/all';
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this._mail + ':' + this._pass),
      'Content-Type': 'application/json'
    });
    return this._http.get<AlbumModel[]>(url, { headers: headers });
  }

  getOne(actId: number): Observable<AlbumModel> {
    const url = '/album/get/' + actId;
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this._mail + ':' + this._pass),
      'Content-Type': 'application/json'
    });
    return this._http.get<AlbumModel>(url, { headers: headers });
  }

  postNew(name: string, link: number): number {
    const url = '/album/add';
    const body = JSON.stringify({item: name, price: link});
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this._mail + ':' + this._pass),
      'Content-Type': 'application/json'
    });
    const req = this._http.post(url, body, { headers: headers })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
    let actId: number;
    let albums: AlbumModel[];
    this.getAll().subscribe(data => {
      albums = data;
    });
    for (const ab of albums) {
      if (ab.name = name && ab.link) {
        actId = ab.id;
      }
    }
    return actId;
  }

  get emtyAlbum(): AlbumModel {
    const am = new AlbumModel();
    am.id = null;
    am.name = null;
    am.link = null;
    return am;
  }
}
