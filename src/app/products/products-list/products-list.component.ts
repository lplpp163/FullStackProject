import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import {environment} from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productKey: string;
  products: Product[];
  backend = `${environment.backend}`;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  add() {
  }

  detail(id) {
    this.router.navigate([`/products/${id}`]);
  }
}
