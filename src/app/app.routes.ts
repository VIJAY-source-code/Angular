import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
   
];
