import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  right = 'right';
  Logining = true;
  ShowRegister = false;

  $speed = 20;
  $count = 0;
  $inter; //  thread (?
  vLeft = 30;
  vRight = 50;
  myLeft = '30%';
  myRight = '50%';
  myMargin = '0% 0% 0% 57%';

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public registerErrors: string;


  login_user = {
    email: '',
    password: ''
  };
  register_user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    level: '2'
  };

  constructor(private authService: AuthService, private router: Router) { }

  //  "No Account"
  //  hide register (input, star, check)
  //  isLogin = false
  //  Expand_right()
  //  show register (input, star, check)

  //  "Have Account"
  //  isLogin = true
  //  Expand_left()

  private ToLeft() {
    if (this.vRight < 50) {
      this.vLeft -= 1;
      this.vRight += 1;
      this.myLeft = this.vLeft + '%';
      this.myRight = this.vRight + '%';
    } else {
      clearInterval(this.$inter);
    }
  }
  private ToRight() {
    if (this.vLeft < 50) {
      this.vLeft += 1;
      this.vRight -= 1;
      this.myLeft = this.vLeft + '%';
      this.myRight = this.vRight + '%';
      console.log(this.$count);
    } else {
      this.ShowRegister = true;
      clearInterval(this.$inter);
    }
  }

  public OnLogin() {
    this.ShowRegister = false;
    this.Logining = true;
    // this.myMargin = '0% 0% 0% 57%';
    this.$inter = setInterval(() => { this.ToLeft(); }, this.$speed);
  }
  public OnRegister() {
    this.ShowRegister = false;
    this.Logining = false;
    // this.myMargin = '0% 57% 0% 5%';
    this.$inter = setInterval(() => { this.ToRight(); }, this.$speed);
  }


  ngOnInit() {
    console.log('[oninit]');
    console.log(this.Logining);
  }

  register() {
    // console.log(this.register_user);
    this.authService.register(this.register_user).subscribe((data: any) => {
      // console.log(data);
      if (data.success) {
        alert('Registration success!');
        this.OnLogin();
        this.router.navigate(['/login']);
        /// 應嘗試直接自動登入並導向至HOME
      } else {
        alert('fail');
      }
    },
    response => {
      console.log(response);
      alert(response.error.message);
    });
  }

  login() {
    console.log(this.login_user);
    this.authService.login(this.login_user).subscribe((data: any) => {
      console.log('login');
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      } else {
        alert('fail');
      }
    },
    response => {
      console.log(response);
      alert(response.error.message);
    });

    this.authService.me().subscribe((data: any) => {
      console.log('me:');
      console.log(data);
    });
    // if (localStorage.getItem('token')) {
    //   this.token.token = localStorage.getItem('token');
    //   alert('token success');
    //   this.authService.me().subscribe((data: any) => {
    //     console.log(data);
    //   });
    // } else {
    //   alert('token fail');
    // }

  }

}
