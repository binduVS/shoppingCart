import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { AppComponent } from '../app.component';
import { ProductDetailComponent } from '../products/products-detail/product-detail.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
product :IProduct;
cart :IProduct[] =[];
quantity:number;
cartproducts:any[]=[];
CGST:number = 2.75;
SGST:number= 2.75;
// totalprice :number = (this.quantity)*(this.product.ProductPrice);
constructor(private appcomponent:AppComponent, private productdetail: ProductDetailComponent) {
  //
  this.cartproducts=productdetail.itemsArray;
  console.log(productdetail.product);
}
  ngOnInit() {
    var item = JSON.parse(localStorage.getItem('storedproduct'));
    this.cart.push(item);
  // if(localStorage.getItem('storedproduct') != null){
  //    this.cart = JSON.parse(localStorage.getItem('storedproduct'));
    //  this.cart.push(this.product);
    console.log(this.cart)
  }
}
