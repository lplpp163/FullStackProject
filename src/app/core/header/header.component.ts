import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hearts = [true, true, true, true, true];
  heart_bool = true;
  showAD = false;
  forIndex = 0;
  keyword = '';
  backend = `${environment.backend}`;

  currentPage = (localStorage.getItem('cpi') != null) ? localStorage.getItem('cpi') : 0  ;

  get items() {
    return this.cartService.items;
  }

  get total() {
    return this.cartService.total;
  }

  get ship() {
    return this.cartService.ship;
  }

  // user info
  get userToken() {
    return localStorage.getItem('token');
  }
  get userName() {
    return localStorage.getItem('user_name');
  }
  get userLevel() {
    return Number(localStorage.getItem('user_level'));
  }
  userPrintLevel() {
    if (this.forIndex < Number(localStorage.getItem('user_level'))) {
      this.heart_bool = true;
    } else {
      this.heart_bool = false;
    }
    this.forIndex ++;
    if (this.forIndex >= 5) {
      this.forIndex = 0;
    }
  }

  constructor(private productService: ProductsService, private cartService: CartService,
    private authService: AuthService, private router: Router) {
    if ( Number(localStorage.getItem('user_level')) === 1) {
      this.showAD = true;
    }
    this.currentPage = (localStorage.getItem('cpi') != null) ? localStorage.getItem('cpi') : 0  ;
   }

  get isLogin() {
    return localStorage.getItem('token');
  }

  ngOnInit() {
    this.cartService.refresh();
    this.currentPage = (localStorage.getItem('cpi') != null) ? localStorage.getItem('cpi') : 0  ;
  }

  logout() {
    this.authService.logout().subscribe((data: any) => {
      if (data.message) {
        // alert(data.message);
      } else {
        console.log('logout fail');
      }
    },
    response => {
      console.log(response.error.message);
    });
    localStorage.removeItem('token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_level');
    localStorage.removeItem('discount');

    this.router.navigate(['/login']);
  }

  searchClick() {
    if (this.keyword.trim()) {
      this.productService.refresh(this.keyword, null, null, null, null, null);
      this.router.navigate(['/products', {search: this.keyword}]);
      this.keyword = '';
    }
  }

  reload() {
    this.productService.refresh(null, null, null, null, null, null);
  }

  reloadBrand(brand) {
    this.productService.refresh(null, null, brand, null, null, null);
    this.router.navigate(['/products', {brand: brand}]);
  }

  reloadOS(os) {
    this.productService.refresh(null, null, null, os, null, null);
    this.router.navigate(['/products', {os: os}]);
  }

  reloadTag(tag) {
    this.productService.refresh(null, null, null, null, tag, null);
    this.router.navigate(['/products', {tag: tag}]);
  }

  reloadSize(size) {
    this.productService.refresh(null, null, null, null, null, size);
    this.router.navigate(['/products', {size: size}]);
  }

  remove(id) {
    this.cartService.remove(id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }

  setCurrentPage(index) {
    localStorage.setItem('cpi', index);
  }

  ADClicked() {

  }

}
