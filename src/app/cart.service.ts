import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IProduct } from "./product";
import { Observable } from "rxjs/Observable";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
@Injectable()
export class CartService {
  x:any;
  private cartSource = new BehaviorSubject(this.x);
  cart = this.cartSource.asObservable();
  constructor() { }
  updateCart(cart:any){
    //console.log(cart);
    this.cartSource.next(cart);
    this.x = cart;
    return cart.do(data => console.log(JSON.stringify(data)))
  }
}

