import { Component, OnInit } from '@angular/core';
import {WishlistModel} from '../../shared/model/wishlist-model';
import {WishlistService} from '../../shared/service/wishlist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  newBasket: WishlistModel;
  baskets: WishlistModel[];
  private _lastRandom: number;

  constructor(
    private _router: Router,
    private _basketService: WishlistService) {
  }

  ngOnInit() {
    this._basketService.getAll().subscribe(data => {
      this.baskets = data;
    });
    this.newBasket = this._basketService.emtyWish;
  }

  onSubmit(form) {
    console.log(form);
    this.newBasket.item = form.item;
    this.newBasket.price = +form.price;
    this._basketService.postNew(this.newBasket.item, this.newBasket.price);
    this._router.navigate(['/basket'] );
  }

  calculateStyles(): string {
    switch (this.randomNum()) {
      case 1: {
        return 'bg-primary';
      }
      case 2: {
        return 'bg-secondary';
      }
      case 3: {
        return 'bg-success';
      }
      case 4: {
        return 'bg-warning';
      }
      case 5: {
        return 'bg-warning';
      }
      case 6: {
        return 'bg-info';
      }
      case 7: {
        return 'bg-dark';
      }
    }
  }


  randomNum(): number {
    let n = this._lastRandom;
    while ( n === this._lastRandom ) {
      n = Math.floor(Math.random() * (7 - 1)) + 1;
    }
    this._lastRandom = n;
    return n;
  }
}
