import { Component } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service';
import { Router } from '@angular/router';
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
    var todosearch = (<HTMLInputElement>document.getElementById('search')).value;
    this.searched=todosearch;
     this.getByKey(todosearch);
     console.log(this.filteredProducts);
   
  };
  constructor(private _router: Router, private _productService : ProductService){

  }
  getByKey(todosearch) {
    var found = null;
    for (var i = 0; i < this.Products.length; i++) {
        var element = this.Products[i];

        if (element.ProductName == todosearch) {
           found = element;
           this.filteredProducts.push(found);
       } 
       else{
         console.log('not matched');
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
