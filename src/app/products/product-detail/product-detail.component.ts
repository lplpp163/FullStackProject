import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productKey: string;
  product: Product;
  backend = `${environment.backend}`;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProduct(this.id).subscribe((data: Product) => {
      this.product = data;
    });
  }

  add() {
  }

}
