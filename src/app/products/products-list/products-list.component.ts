import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  get products() {
    return this.productsService.products;
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

}
