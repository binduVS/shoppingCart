import { Component, OnInit, Input, Output, EventEmitter,ViewEncapsulation} from '@angular/core';
import { IProduct } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage:string;
  relatedproducts: IProduct[]=[];
  itemsArray:any=[];
  quantity : any;
  constructor(private _route: ActivatedRoute,private _productService:ProductService) {
   
   }

  increment(){
    var input = parseInt((<HTMLInputElement>document.getElementById('quantity')).value);
    input = input + 1;
    this.quantity = input.toString();
    console.log(this.quantity);
    document.getElementById("quantity").setAttribute('value',this.quantity);
  }
  decrement(){
    var input = parseInt((<HTMLInputElement>document.getElementById('quantity')).value);
    if(input > 1){
      input = input - 1;
      this.quantity = input.toString();
      document.getElementById("quantity").setAttribute('value',this.quantity);
    }
  }

   addtocart(){
    localStorage.setItem('storedproduct', JSON.stringify(this.product));
    this.itemsArray.push(this.product)
    console.log(this.product);
   }
    
  ngOnInit():void{
    let id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProducts()
   .subscribe(products=> {
     this.product = products.find(item => item.productId === id);
     for(var i=0; i<products.length; i++){
    
      if(products[i].productId !== this.product.productId){
        
         this.relatedproducts.push(products[i]);
       }
     }
     console.log(this.relatedproducts);
    },
    error=> this.errorMessage = <any>error);
    
  }
 
}
