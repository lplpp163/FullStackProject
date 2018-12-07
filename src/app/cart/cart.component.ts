import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  backend = `${environment.backend}`;

  get items() {
    return this.cartService.items;
  }

  get total() {
    return this.cartService.total;
  }

  get ship() {
    return this.cartService.ship;
  }

  get myDiscount() {
    return Number(localStorage.getItem('discount'));
  }

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.cartService.refresh();
  }

  add(id) {
    this.cartService.add(id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }

  remove(id) {
    this.cartService.remove(id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }

  update(id, act) {
    this.cartService.update(id, act).subscribe((data: any) => {
      this.ngOnInit();
    });
  }

  checkout() {
    return this.router.navigate(['/checkout']);
  }

}
