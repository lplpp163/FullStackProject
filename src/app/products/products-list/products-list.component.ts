import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import {environment} from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { HeaderComponent } from 'src/app/core/header/header.component';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  searchKey: string;
  products: Product[];
  backend = `${environment.backend}`;

  constructor(private productsService: ProductsService,
    private router: Router,
    private activatedrouter: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {
    this.searchKey = this.activatedrouter.snapshot.paramMap.get('id');
    if (this.searchKey === null || this.searchKey === '') {
      this.productsService.getProducts().subscribe((data: Product[]) => {
        this.products = data;
      });
    } else {
      this.productsService.getProductsByName(this.searchKey).subscribe((data: Product[]) => {
        this.products = data;
      });
    }
  }

  add(id) {
    this.cartService.add(id).subscribe((data: any) => {
      if (data.success) {
        location.reload();
      }
    });
  }

  detail(id) {
    this.router.navigate([`/products/${id}`]);
  }
}
