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
  quantity : any = '1';
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
    this.product["ProductCount"] = this.quantity;
    localStorage.setItem('storedproduct', JSON.stringify(this.product));
    this.itemsArray.push(this.product)
    console.log(this.itemsArray);
   }
    
  ngOnInit():void{
    let id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProducts()
   .subscribe(products=> {
     this.product = products.find(item => item.productId === id);
     for(var i=0; i<products.length; i++){
      if(products[i].productId !== this.product.productId){
        if(products[i].tags.range ==this.product.tags.range && products[i].tags.style ==this.product.tags.style && products[i].tags.species ==this.product.tags.species){
          //this.relatedproducts[i] == products[i];
          this.relatedproducts.push(products[i]);
          console.log('entered one',this.relatedproducts);
        }
       } 
     }
     for(var i=0; i<products.length; i++){
      if(products[i].productId !== this.product.productId){
        var length = this.relatedproducts.length;
        if((products[i].tags.range ==this.product.tags.range && products[i].tags.style ==this.product.tags.style) || (products[i].tags.style ==this.product.tags.style && products[i].tags.species ==this.product.tags.species) || (products[i].tags.species ==this.product.tags.species && products[i].tags.range ==this.product.tags.range)){
          if(this.relatedproducts.includes(products[i])==false){
          console.log(length);
          this.relatedproducts.push(products[i]);
          //this.relatedproducts[length] == products[i];
          console.log(this.relatedproducts);
          }
        }
      }
     }
     for(var i=0; i<products.length; i++){
      if(products[i].productId !== this.product.productId){
        var length = this.relatedproducts.length;
        if((products[i].tags.range ==this.product.tags.range || products[i].tags.style ==this.product.tags.style || products[i].tags.species ==this.product.tags.species)){
          if(this.relatedproducts.includes(products[i])==false){
            this.relatedproducts.push(products[i]);
          }
        }
      }
     }
            // else if((products[i].tags.range ==this.product.tags.range && products[i].tags.style ==this.product.tags.style) || (products[i].tags.style ==this.product.tags.style && products[i].tags.species ==this.product.tags.species) || (products[i].tags.species ==this.product.tags.species && products[i].tags.range ==this.product.tags.range)){
        //   if(this.relatedproducts.includes(products[i])==false){
        //   this.relatedproducts.push(products[i]);
        //   console.log('entered two',this.relatedproducts);
        //   }
        // }
        // else if(products[i].tags.range ==this.product.tags.range || products[i].tags.style ==this.product.tags.style || products[i].tags.species ==this.product.tags.species){
        //   if(this.relatedproducts.includes(products[i])==false){
        //   this.relatedproducts.push(products[i]);
        //   console.log('entered third',this.relatedproducts); 
         //this.relatedproducts.push(products[i]);
         //console.log(this.relatedproducts);
    },
    error=> this.errorMessage = <any>error);
    
  }
 
}
