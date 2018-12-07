import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/cart-item';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[];
  total = 0;
  ship = 0;
  _headers = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

  constructor(private httpClient: HttpClient) { }

  getCartItems() {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(`${environment.api}/cart`, this._headers);
    }
  }

  add(p_id) {
    return this.httpClient.post(`${environment.api}/cart/add`, p_id, this._headers);
  }

  remove(id) {
    return this.httpClient.delete(`${environment.api}/cart/del/${id}`, this._headers);
  }

  update(id, act) {
    return this.httpClient.patch(`${environment.api}/cart/up/${id}`, act, this._headers);
  }

  createOrder(productIds) {
    return this.httpClient.post(`${environment.api}/orders`, productIds, this._headers);
  }

  refresh() {
    if (localStorage.getItem('token')) {
      this.getCartItems().subscribe((data: CartItem[]) => {
        this.items = data;
        this.total = 0;
        for (const item of data) {
          this.total = this.total + (item.product.price * item.quantity) * Number(localStorage.getItem('discount'));
        }
      });
    }
  }

}
