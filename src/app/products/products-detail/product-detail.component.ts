import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage:string;
  constructor(private _route: ActivatedRoute,private _productService:ProductService) {

   }
  ngOnInit():void{
    let id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProducts()
   .subscribe(products=> {
     this.product = products.find(item => item.productId === id)
    },
    error=> this.errorMessage = <any>error);
    console.log(id);
     
  }
 
}
