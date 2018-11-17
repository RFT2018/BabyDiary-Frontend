import {Component, Input, OnInit} from '@angular/core';
import {KidModel} from '../../shared/model/kid-model';

@Component({
  selector: 'app-kidcard',
  templateUrl: './kidcard.component.html',
  styleUrls: ['./kidcard.component.scss']
})
export class KidcardComponent implements OnInit {
  @Input() kid: KidModel;

  constructor() { }

  ngOnInit() {
  }

  kinderPicture(kid: KidModel): string {
    return './assets/temporary/pictures/kids/' + kid.picture;
  }

}
