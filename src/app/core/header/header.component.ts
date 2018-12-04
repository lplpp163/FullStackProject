import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLogin() {
    return this.authService.isLogin();
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log(localStorage.getItem('token'));
    this.authService.logout().subscribe((data: any) => {

      if (data.message) {
        alert(data.message);
      } else {
        alert('fail');
      }
    },
    response => {
      // console.log(response);
      alert(response.error.message);
    });


    //this.router.navigate(['/']);
  }

  user_name() {
    return this.authService.user_name();
  }

}
