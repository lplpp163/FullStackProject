import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProduct(id) {
    return this.httpClient.get(`${environment.api}/products/${id}`);
  }

  getProducts() {
    return this.httpClient.get(`${environment.api}/products`);
  }

  getProductsByName(name) {
    return this.httpClient.get(`${environment.api}/products/name/${name}`);
  }

}
