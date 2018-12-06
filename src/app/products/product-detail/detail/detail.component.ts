import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product;
  osNames = ['Windows', 'MacOS', 'Linux'];
  brands = ['Apple', 'MSI', 'ASUS', 'Acer', 'Lenovo', 'Hp'];
  id = this.route.snapshot.paramMap.get('id');
  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProduct(this.id).subscribe((data: Product) => {
      this.product = data;
      console.log(this.product);
    });
  }

}
