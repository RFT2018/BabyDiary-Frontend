import { Component, OnInit } from '@angular/core';
import {KidModel} from '../../shared/model/kid-model';
import {KidService} from '../../shared/service/kid.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  newKid: KidModel[];
  onlineKids: KidModel[];

  constructor(private _kidService: KidService) {
    this.loadKids();
  }

  loadKids() {
    this.newKid = this._kidService.kids;
  }

  ngOnInit() {
    this._kidService.getAllKidByFirebaseio().subscribe(data => {
      this.onlineKids = data;
    });
  }

}
