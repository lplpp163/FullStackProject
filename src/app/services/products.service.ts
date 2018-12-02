import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];

  // originalProducts = this.products;
  // search(keyword) {
  //   if (keyword.trim() === '') {
  //     this.products = this.originalProducts;
  //   } else {
  //     this.products = this.originalProducts.filter(
  //       product => product.name.indexOf(keyword) !== -1
  //     );
  //   }
  // }

  constructor(private httpClient: HttpClient) { }

  getProduct(id) {
    return this.httpClient.get(`${environment.api}/products/${id}`);
  }

  getProducts() {
    return this.httpClient.get(`${environment.api}/products`);
  }

}
