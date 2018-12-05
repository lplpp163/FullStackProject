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

  backend = `${environment.backend}`;

  currentPage = 0;

  get items() {
    return this.cartService.items;
  }

  get total() {
    return this.cartService.total;
  }

  get ship() {
    return this.cartService.ship;
  }

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {
   }

  keyword = '';

  get isLogin() {
    return localStorage.getItem('token');
  }

  ngOnInit() {
    this.cartService.refresh();
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

}
