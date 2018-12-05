import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopslider',
  templateUrl: './shopslider.component.html',
  styleUrls: ['./shopslider.component.css']
})
export class ShopsliderComponent implements OnInit {

  freshslide = 0;
  maxSlide = 1;
  constructor() { }

  ngOnInit() {
  }

  goRight() {
    this.freshslide += 1;
    if (this.freshslide > this.maxSlide) {
      this.freshslide = 0;
    }
  }

  goLeft() {
    this.freshslide -= 1;
    if (this.freshslide < 0) {
      this.freshslide = this.maxSlide;
    }
  }

}
