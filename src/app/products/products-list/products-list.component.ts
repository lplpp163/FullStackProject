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
  priceSort: string;
  branch: string;
  backend = `${environment.backend}`;
  filterCollapes = [
    true,
    false,
    false,
    false,
    false
  ];

  constructor(private productsService: ProductsService,
    private router: Router,
    private activatedrouter: ActivatedRoute,
    private cartService: CartService) { }

  get products() {
    return this.productsService.products;
  }

  ngOnInit() {
    this.searchKey = this.activatedrouter.snapshot.paramMap.get('id');
    this.priceSort = this.activatedrouter.snapshot.paramMap.get('price');
    this.branch = this.activatedrouter.snapshot.paramMap.get('branch');
    this.productsService.refresh(this.searchKey, this.priceSort, this.branch);
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

  isSearch() {
    if (this.searchKey !== null) {
      return true;
    }
    return false;
  }

  reload() {
    location.reload();
  }
}
