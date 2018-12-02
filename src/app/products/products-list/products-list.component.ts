import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productKey: string;
  products: Product[];
  backend = `${environment.backend}`;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  add() {
  }
}
