import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  items: CartItem[];
  backend = `${environment.backend}`;

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe((data: CartItem[]) => {
      this.items = data;
    });
  }

  remove(id): void {
    this.cartService.remove(id);
  }

  checkout() {
    return this.router.navigate(['/checkout']);
  }
}
