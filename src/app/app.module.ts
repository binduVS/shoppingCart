import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/products-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/products-detail/product-detail.component';
import { CategoriesComponent } from './home/categories.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CategoriesComponent,
    LoginComponent,
    CartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'categories', component: CategoriesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cart', component: CartComponent },
      { path: 'profile', component: ProfileComponent }
    ])
  ],
  providers: [ProductDetailComponent, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
