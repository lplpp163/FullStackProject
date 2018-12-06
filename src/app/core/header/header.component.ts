import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

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

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {
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
    this.showAD = false;
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
      this.reload();
      this.router.navigate(['/products', {id: this.keyword}]);
    }
  }

  reload() {
    location.reload();
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
