import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService{
  private _productUrl = '../assets/products.json';
  private _categoriesUrl = '../assets/categories.json'
  constructor(private _http:HttpClient){

  }
    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productUrl)
           .do(data => console.log(JSON.stringify(data)))
           
    } 
    getCategories(): any{
      return this._http.get(this._categoriesUrl)
         .do(data => console.log(JSON.stringify(data)))
         
  }
}
