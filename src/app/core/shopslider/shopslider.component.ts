import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-shopslider',
  templateUrl: './shopslider.component.html',
  styleUrls: ['./shopslider.component.css']
})
export class ShopsliderComponent implements OnInit {

  backend = `${environment.backend}`;
  freshslide = 0;
  maxSlide = 1;
  listLen = 0;
  pickindex: number[];

  pickedOne: Product;
  pickedTwo: Product;
  pickedThree: Product;
  pickedFour: Product;
  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    // this.listLen = this.productsService.products.length ? this.productsService.products.length : 0;
    // console.log(this.productsService.products.length);
    //  this.pickindex = [
    //    Math.floor(Math.random() * this.listLen),
    //    Math.floor(Math.random() * this.listLen),
    //    Math.floor(Math.random() * this.listLen),
    //    Math.floor(Math.random() * this.listLen),
    // ];
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
