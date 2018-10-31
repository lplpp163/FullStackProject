import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }
  get products() {
    return this.productsService.originalProducts;
  }
  id = this.route.snapshot.paramMap.get('id');
  product = this.products[this.id] ;
  ngOnInit() {
  }

}
