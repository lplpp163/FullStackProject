import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public removeFromCart( p_product: Product ) {

  }
}
