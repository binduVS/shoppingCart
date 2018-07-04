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
  constructor(private _router: Router){

  }
  // onclick():void{
  //   this._router.navigate(['/products'])
  // }

}
