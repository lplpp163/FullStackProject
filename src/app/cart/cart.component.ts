import { Component, OnInit } from '@angular/core';
import { Product} from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  private service: CartService;


  constructor(private cartService: CartService) {
  }

  public delCartHandler(p_product: Product): void {
    this.service.removeFromCart(p_product);
  }

  ngOnInit() {
  }
}
