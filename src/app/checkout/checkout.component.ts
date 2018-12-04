import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  get items() {
    return this.cartService.items;
  }

  get total() {
    return this.cartService.total;
  }

  get ship() {
    return this.cartService.ship;
  }

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.refresh();
  }

  submit() {
    this.cartService.createOrder(this.items).subscribe(data => {
      alert('checkout success');
    });
  }

}
