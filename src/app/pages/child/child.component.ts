import { Component, OnInit } from '@angular/core';
import {KidModel} from '../../shared/model/kid-model';
import {KidService} from '../../shared/service/kid.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  kids: KidModel[];

  constructor(private _kidService: KidService) {
    this.loadKids();
  }

  loadKids() {
    this.kids = this._kidService.kids;
  }

  ngOnInit() {
  }

}
