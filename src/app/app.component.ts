import { Component } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { ProductListComponent } from './products/products-list/product-list.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  title = 'Shopping cart';
  errorMessage:string;
  Products : IProduct[]=[];
  filteredProducts : IProduct[]=[];
  searched:string;
  count:number;
  cart:any=[];
  search(){
    this.searched= (<HTMLInputElement>document.getElementById('search')).value;
     this.getByKey(this.searched);
     console.log(this.searched);
     return this.searched;
  };
  constructor(private _router: Router, private _productService : ProductService){

  }
  getByKey(todosearch) {
    var found;
    for (var i = 0; i < this.Products.length; i++) {
        if (this.Products[i].ProductName == todosearch) {
          if(this.filteredProducts.includes(this.Products[i])==false){
           found = this.Products[i];
           this.filteredProducts.push(found);
           console.log(this.filteredProducts.length);
          }
       } 
    }
    
    return found;
}
  ngOnInit(){
    var item = localStorage.getItem('storedproduct');
    this.cart.push(item);
    this.count = this.cart.length;
    this._productService.getProducts()
    .subscribe(products=> {
      this.Products = products;
     },
     error=> this.errorMessage = <any>error);
    
  }
}
