import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];

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

  refresh (searchKey) {
    if (searchKey) {
      this.getProductsByName(searchKey).subscribe((data: Product[]) => {
        this.products = data;
      });
    } else {
      this.getProducts().subscribe((data: Product[]) => {
        this.products = data;
      });
    }
  }

}
