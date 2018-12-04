import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

   get isLogin() {
     return localStorage.getItem('token')
   }
  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe((data: any) => {
      if (data.message) {
        // alert(data.message);
      } else {
        alert('logout fail');
      }
    },
    response => {
      // console.log(response);
      alert(response.error.message);
    });
    this.router.navigate(['/login']);
  }

}
