import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  loading = signal(false);

  showLoader = () => this.loading.set(true);

  hideLoader = () => this.loading.set(false);

  private items: any[] = [];

  cartItems: Array<any> = [];

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
