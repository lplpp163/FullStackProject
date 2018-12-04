import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  submit() {
    this.cartService.createOrder([2, 4]).subscribe(data => {
      alert('checkout success');
    });
  }

}
