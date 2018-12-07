import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import {environment} from 'src/environments/environment';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
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
    this.pdtLength = this.pdts ? this.pdts.length : 0;
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
    this.searchKey = this.activatedrouter.snapshot.paramMap.get('search');
    this.productsService.refresh(this.activatedrouter.snapshot.paramMap.get('search'),
     this.activatedrouter.snapshot.paramMap.get('price'),
     this.activatedrouter.snapshot.paramMap.get('brand'),
     this.activatedrouter.snapshot.paramMap.get('os'),
     this.activatedrouter.snapshot.paramMap.get('tag')
     );
  }

  add(id) {
    this.cartService.add(id).subscribe((data: any) => {
      if (data.success) {
        this.cartService.refresh();
        alert('成功加入');
      }
    });
  }

  isSearch() {
    this.searchKey = this.activatedrouter.snapshot.paramMap.get('search');
    if (this.searchKey !== null && this.searchKey !== '') {
      return true;
    }
    return false;
  }

  reload() {
    this.ngOnInit();
  }

  reloadTag(tag) {
    this.router.navigate(['/products', {tag: tag}]);
    this.productsService.refresh(null, null, null, null, tag);
  }

  reloadBrand(brandnum) {
    this.router.navigate(['/products', {brand: brandnum}]);
    this.productsService.refresh(null, null, brandnum, null, null);
  }

  reloadPrice(sortMethod) {
    this.router.navigate(['/products', {price: sortMethod}]);
    this.productsService.refresh(null, sortMethod, null, null, null);
  }

  reloadOS(osnum) {
    this.productsService.refresh(null, null, null, osnum, null);
  }
}
