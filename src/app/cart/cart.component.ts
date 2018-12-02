import { Component, OnInit } from '@angular/core';
import { CartItem} from '../models/cart-item';
import { Product} from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  private service: CartService;
  data: Product;
  cart: Array<Product>;
  cart_id: string;

  constructor(private cartService: CartService) {
    this.data = new Product();
    this.service = cartService;
    this.cart = new Array<Product>();
  }

  public delCartHandler(p_product: Product): void {
    this.service.removeFromCart(p_product);
  }

  ngOnInit() {
  }
}
