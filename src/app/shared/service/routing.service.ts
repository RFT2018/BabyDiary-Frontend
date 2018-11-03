import { Injectable } from '@angular/core';
import {AppRoutingModule} from '../../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(private _routing = new AppRoutingModule()) {
  }

  getRouting(): AppRoutingModule {
    return this._routing;
  }
}
