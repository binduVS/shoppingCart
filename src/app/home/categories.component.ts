import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 Categories : any[]=[];
 errorMessage : string;
 constructor(private _productService:ProductService){ 
  
}
  ngOnInit() {
    this._productService.getCategories()
   .subscribe(categories=> {
     this.Categories = categories;
    },
    error=> this.errorMessage = <any>error);
    console.log(this.Categories);
    
  }
  }


