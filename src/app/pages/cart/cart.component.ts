import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'; // Adjust path as needed

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems: Array<any> = [];

  constructor(public cartService: DataService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
