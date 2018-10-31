import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  right = 'right';
  safe = true;
  enable = true;
  $count = 0;
  $inter;
  vLeft = 30;
  vRight = 50;
  myLeft = '30%';
  myRight = '50%';
  myMargin = '0% 0% 0% 57%';

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public registerErrors: string;

  constructor() { }

  myStyle = {
    'left': '10%',
    'font-size': '70px',
    'font-weight': 'bold'
    };

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
      clearInterval(this.$inter);
    }
  }

  public onIan() {
    this.right = 'left';
    if (this.safe === true)    {
      this.safe = false;
    } else {
      this.safe = true;
    }

    this.$inter = setInterval(() => { this.ToLeft(); }, 20);
  }
  public onB2() {
    if (this.vRight !== 50) {
      this.myMargin = '0% 0% 0% 57%';
      this.$inter = setInterval(() => { this.ToLeft(); }, 10);
    } else {
      this.myMargin = '0% 57% 0% 5%';
      this.$inter = setInterval(() => { this.ToRight(); }, 10);
    }
  }


  ngOnInit() {
  }


}
