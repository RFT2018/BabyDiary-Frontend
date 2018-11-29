import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WishlistModel} from '../model/wishlist-model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private _wishlist: WishlistModel[];

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<WishlistModel[]> {
    const url = '/wishlist/get/all';
    const body = JSON.stringify({username: '', password: ''});
    const headers = new HttpHeaders({'Authorization': 'Basic ' + btoa('asdf' + ':' + 'asdf')});
    headers.append('Content-Type', 'application/json');
    return this._http.get<WishlistModel[]>(url);
  }

  postNew(item: string, price: number): void {
    const url = '/wishlist/add';
    const body = JSON.stringify({item: item, price: price});
    const headers = new HttpHeaders({'Authorization': 'Basic ' + btoa('asdf' + ':' + 'asdf'), 'Content-Type': 'application/json'});
    headers.append('Content-Type', 'application/json');
    console.log(body);
    console.log(headers);
    const req = this._http.post(url, body, { headers: headers })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  get emtyWish(): WishlistModel {
    const wm = new WishlistModel();
    wm.id = 1;
    wm.item = '';
    wm.price = 0;
    return wm;
  }
}
