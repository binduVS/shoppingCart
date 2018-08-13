import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../product'
import { ProductService } from '../../product.service';
import { AppComponent } from '../../app.component';
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Shopping cart';
  errorMessage:string;
  Categories: any[] =[];
  Products : IProduct[] = [];
  copy : IProduct[];
  brandorder : any[] =[];
  SearchedItems : IProduct[]=[];
  colororder : any[]=[];
  filteredprices:number[]=[]
  quaterprice : number;
  halfprice : number;
  maxprice :number;
  searchedProducts : IProduct[] = [];
  openbrand(){
    document.getElementById('mybrand').style.display = 'block';
    document.getElementById('brand-plus').style.display = 'none';
    document.getElementById('brand-minus').style.display = 'inline-block';
  }
  closebrand(){
    document.getElementById('mybrand').style.display = 'none';
    document.getElementById('brand-plus').style.display = 'inline-block';
    document.getElementById('brand-minus').style.display = 'none';
  }
  openprice(){
    document.getElementById('myprice').style.display = 'block';
    document.getElementById('price-plus').style.display = 'none';
    document.getElementById('price-minus').style.display = 'inline-block';
  }
  closeprice(){
    document.getElementById('myprice').style.display = 'none';
    document.getElementById('price-plus').style.display = 'inline-block';
    document.getElementById('price-minus').style.display = 'none';
  }
  opencolor(){
    document.getElementById('mycolor').style.display = 'block';
    document.getElementById('color-plus').style.display = 'none';
    document.getElementById('color-minus').style.display = 'inline-block';
  }
  closecolor(){
    document.getElementById('mycolor').style.display = 'none';
    document.getElementById('color-plus').style.display = 'inline-block';
    document.getElementById('color-minus').style.display = 'none';
  }
  brandfilter(){
    var brandfiltered=[];
     var filtered = (document.getElementsByTagName('input'));
     for(var i=0; i<this.brandorder.length; i++){
      if(filtered[i].checked==true)
      {
        if(brandfiltered.includes(this.Products[i-1])){
          break;
        }
        brandfiltered.push(this.Products[i-1]);
       }
     } this.Products=brandfiltered;
     console.log(brandfiltered);
  }
  filterprice(min,max){
    this.Products = this.copy;
    var pricefiltered=[];
    for(var i=0; i<this.Products.length; i++){
      if(this.Products[i].ProductPrice >= min && this.Products[i].ProductPrice <= max)
      {
         pricefiltered.push(this.Products[i]);
       }
     }
     this.Products=pricefiltered;
  };
 clearprice(){
  this.Products = this.copy;
  (<HTMLInputElement>document.getElementById('min-value')).value = '';
  (<HTMLInputElement>document.getElementById('max-value')).value = '';
 }
 clearallfilter(){
  this.Products = this.copy;
 }
 colorfilter(c: any){
  this.Products=this.copy;
  var filteredcolors=[];
  for(var i=0; i<this.Products.length; i++){
   if(this.Products[i].ProductColor == c ){
   filteredcolors.push(this.Products[i]);
   }
 }
  console.log(this.colororder.length);
   this.Products=filteredcolors;
  }

  
 radio1(){
   var condition = (<HTMLInputElement>document.getElementById('check-text1')).innerHTML;
   condition = condition.replace(/\s/g,'');
   var condition = condition.replace(/to/g, "-");
   var fields = condition.split('-');
   var min = fields[0];
   var max = fields[1];
   this.filterprice(min,max);
 }
 radio2(){
  var condition = document.getElementById('check-text2').innerHTML;
  condition = condition.replace(/\s/g,'');
  var condition = condition.replace(/to/g, "-");
  var fields = condition.split('-');
  var min = fields[0];
  var max = fields[1];
  this.filterprice(min,max);
}
radio3(){
  var condition = document.getElementById('check-text3').innerHTML;
  condition = condition.replace(/\s/g,'');
  var condition = condition.replace(/to/g, "-");
  var fields = condition.split('-');
  var min = fields[0];
  var max = fields[1];
  this.filterprice(min,max);
}
pricego(){
  var min = (<HTMLInputElement>document.getElementById('min-value')).value;
  var max = (<HTMLInputElement>document.getElementById('max-value')).value;
  if((min != '')&&(max != ''))
  this.filterprice(parseInt(min),parseInt(max));
}

constructor(private _productService:ProductService, private appcomponent:AppComponent){ 
}
  ngOnInit():void{
    this._productService.getCategories()
    .subscribe(categories=> {
      this.Categories = categories;
      console.log(this.Categories);
     },
     error=> this.errorMessage = <any>error)
    this._productService.getProducts()
   .subscribe(products=> {
     this.Products = products;
     for(var i=0; i<products.length; i++){
      this.filteredprices.push(products[i].ProductPrice)
      if(this.colororder.includes(products[i].ProductColor)==false){
      this.colororder.push(products[i].ProductColor);
      }
      if(this.brandorder.includes(products[i].ProductBrand)==false){
      this.brandorder.push(products[i].ProductBrand);
      }
      }
      this.filteredprices.sort(function(a,b) { return a - b; });
      //this.brandorder.sort();
      this.halfprice = parseInt(((this.filteredprices.length)/2).toFixed());
      this.quaterprice = parseInt(((this.halfprice)/2).toFixed());
      this.maxprice = this.filteredprices.length;
      this.copy = this.Products.slice();
      if(this.appcomponent.filteredProducts.length !== 0){
        this.Products = this.appcomponent.filteredProducts;
        console.log('entered component');
      }
    },
    error=> this.errorMessage = <any>error);

  
  }
}
