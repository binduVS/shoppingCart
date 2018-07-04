import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product'
import { ProductService } from '../../product.service';
import * as $ from 'jquery';
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Shopping cart';
  errorMessage:string;
  Products : IProduct[] = []
  constructor(private _productService:ProductService){

  }
  ngOnInit():void{
    this._productService.getProducts()
   .subscribe(products=> {
     this.Products = products;
    },
    error=> this.errorMessage = <any>error);

  }

}
