import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  static $inject = ['$timeout'];

  right = 'right';
  Logining = true;
  Switched = false;
  ShowRegister = false;

  $speed = 20;
  $count = 0;
  $inter; //  thread (?
  vLeft = 30;
  vRight = 50;
  myLeft = '30%';
  myRight = '50%';
  myMargin = '0% 0% 0% 57%';
  //  heart
  $check = 0;
  Loved: boolean[] = [true, true, true, false, false];
  //  show
  Opacity = 0.0;
  //  checkbox bool
  Agree;

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
    level: ''
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
      this.Switched = false;
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
      this.Switched = true;
      clearInterval(this.$inter);
      // raise Opacity (reveal)
      this.$inter = setInterval(() => { this.ShowOpa(); }, 10);
    }
  }
  private ShowOpa() {
    if (this.Opacity < 1.0) {
      this.Opacity += 0.02;
    } else {
      clearInterval(this.$inter);
    }
  }

  public OnLogin() {
    this.ShowRegister = false;
    this.Logining = true;
    this.Opacity = 0.0;
    // this.myMargin = '0% 0% 0% 57%';
    this.$inter = setInterval(() => { this.ToLeft(); }, this.$speed);
  }
  public OnRegister() {
    this.ShowRegister = false;
    this.Logining = false;
    this.Opacity = 0.0;
    this.Switched = false;
    // this.myMargin = '0% 57% 0% 5%';
    this.$inter = setInterval(() => { this.ToRight(); }, this.$speed);
  }

  Love_1() {
    this.MakeLove(1);
  }
  Love_2() {
    this.MakeLove(2);
  }
  Love_3() {
    this.MakeLove(3);
  }
  Love_4() {
    this.MakeLove(4);
  }
  Love_5() {
    this.MakeLove(5);
  }

  MakeLove(love) {
    this.register_user.level = love;
    // 閃白
    // for (let i = 0; i < this.Loved.length; i++) {
    //   this.Loved[i] = false;
    // }
    this.$inter = setInterval(() => { this.CheckLove(); }, 25);
  }
  CheckLove() {
    if (this.$check < 5) {
      if (this.$check < Number(this.register_user.level)) {
        this.Loved[this.$check] = true;
      } else {
        this.Loved[this.$check] = false;
      }
      this.$check += 1;
    } else {
      this.$check = 0;
      clearInterval(this.$inter);
    }
  }

  ngOnInit() {
    console.log('[oninit]');
    console.log(this.Logining);
  }

  register() {
    if (this.Agree) {
      alert('Please uncheck the box.');
      return;
    }
    this.authService.register(this.register_user).subscribe((data: any) => {
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

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user_name', data.user.name);
        localStorage.setItem('user_email', data.user.email);
        localStorage.setItem('user_level', data.user.level);
        console.log(data.user);
        this.router.navigate(['/']);
      } else {
        console.log('no token response');
        alert('wrong email or password');
      }
    },
    response => {
      console.log(response);
      alert('wrong email or password');
    });
  }
}
