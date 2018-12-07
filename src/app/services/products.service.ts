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

  // 搜尋_商品名稱
  getProductsByName(name) {
    return this.httpClient.get(`${environment.api}/products/name/${name}`);
  }

  // 依類別篩 -->OK
  getProductsByTag(tag) {
    return this.httpClient.get(`${environment.api}/products/tag/${tag}`);
  }

  // 依價錢篩   -->OK
  getProductsByPrice(mode) {
    // 高->低  低->高
    return this.httpClient.get(`${environment.api}/products/price/${mode}`);
  }

  // 依尺寸篩
  getProductsBySize(size) {
    // 小 13吋 14吋 15吋 17吋 大
    return this.httpClient.get(`${environment.api}/products/size/${size}`);
  }

  // 依品牌篩   -->OK
  getProductsByBranch(branch_id) {
    // 0: apple 1: msi 2: asus 3: acer 4: lenovo 5: hp
    return this.httpClient.get(`${environment.api}/products/category_id/${branch_id}`);
  }

  // 依作業系統篩 -->OK
  getProductsByOS(OS) {
    return this.httpClient.get(`${environment.api}/products/OS/${OS}`);
  }

  refresh (searchKey, priceSort, branch, os, tag, size) {
    if (searchKey) {
      this.getProductsByName(searchKey).subscribe((data: Product[]) => {
        this.products = data;
      });
    } else if (priceSort) {
      this.getProductsByPrice(priceSort).subscribe((data: Product[]) => {
        this.products = data;
      });
    } else if (branch) {
      this.getProductsByBranch(branch).subscribe((data: Product []) => {
        this.products = data;
      });
    } else if (os) {
      this.getProductsByOS(os).subscribe((data: Product []) => {
        this.products = data;
      });
    } else if (tag) {
        this.getProductsByTag(tag).subscribe((data: Product []) => {
          this.products = data;
        });
    } else if (size) {
      console.log(size);
      this.getProductsBySize(size).subscribe((data: Product []) => {
        this.products = data;
      });
    } else {
      this.getProducts().subscribe((data: Product[]) => {
        this.products = data;
      });
    }
  }

}
