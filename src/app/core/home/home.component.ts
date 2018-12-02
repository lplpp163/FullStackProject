import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { last } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  last_pro: Array<Product>;
  top_pro: Array<Product>;

  get products() {
    return this.productsService.getProducts();
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

}
