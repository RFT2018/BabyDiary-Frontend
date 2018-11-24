import {Component, Input, OnInit} from '@angular/core';
import {KidModel} from '../../shared/model/kid-model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Sex} from '../../shared/enum/sex.enum';

@Component({
  selector: 'app-kidcard',
  templateUrl: './kidcard.component.html',
  styleUrls: ['./kidcard.component.scss']
})
export class KidcardComponent implements OnInit {
  @Input() kid: KidModel;
  form: FormGroup;
  ronly = true;
  keys = Object.keys;
  sexEnum = Sex;


  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    console.log(this.form.value);
    this.edit();
  }

  edit(): void {
    this.ronly = this.ronly === false ? true : false;
  }

  notMod(): void {
    this.edit();
    this.reloadKidData();
  }

  private reloadKidData() {
    this.form = this.fb.group(
      {
        name: this.kid.name,
        birthday: this.kid.birthday,
        sex: this.kid.sex,
        height: this.kid.height,
        weight: this.kid.weight,
        conception: this.kid.conception
      }
    );
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        name: null,
        birthday: null,
        sex: null,
        height: null,
        weight: null,
        conception: null
      }
    );
  }

  kinderPicture(kid: KidModel): string {
    return './assets/temporary/pictures/kids/' + kid.picture;
  }

}
