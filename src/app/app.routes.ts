import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  // {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'cart', component:CartComponent},
  {path: 'product', component:ProductsComponent},
  {path: 'product/:id', component:ProductItemComponent},
  {path : '**', component: HomeComponent},
  {path : 'dashboard', component: AdminDashboardComponent},


];
