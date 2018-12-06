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

  pdts: Product[];
  pdtLength = 0;

  searchKey: string;
  priceSort: string;
  branch: string;
  os: string;
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
    private cartService: CartService) {
      localStorage.setItem('currentPage', '1');
    }

  get products() {
    this.pdts = this.productsService.products;
    this.pdtLength = this.pdts.length;
    return this.productsService.products;
  }

  //  0~5
  get userLevel() {
    return (Number(localStorage.getItem('user_level')));
  }
  //  page helper funcs
  get currentPage() {
    return (Number(localStorage.getItem('currentPage')));
  }
  turnPage(num) {
    localStorage.setItem('currentPage', (Number(localStorage.getItem('currentPage')) + num).toString() );
    window.scroll(0, 0);
  }
  showPage(num) {
    return (this.pdtLength >= ((this.currentPage + num) * 12));
  }

  ngOnInit() {
    this.searchKey = this.activatedrouter.snapshot.paramMap.get('id');
    this.priceSort = this.activatedrouter.snapshot.paramMap.get('price');
    this.branch = this.activatedrouter.snapshot.paramMap.get('branch');
    this.os = this.activatedrouter.snapshot.page.get('os');
    this.productsService.refresh(this.searchKey, this.priceSort, this.branch, this.os);
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
    this.ngOnInit();
  }
}
