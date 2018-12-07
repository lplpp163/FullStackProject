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

  pickindex: number[] = [];
  getPdtsSuccess = false;
  pdtLength = 0;
  pdts: Product[];
  randnum;

  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.getPdtsSuccess = true;
      this.pdts = data;
      this.pdtLength = (data.length ? data.length : 0);
      // Generate 4 random numbers between the length of products
      while (true) {
        this.randnum = Math.floor(Math.random() * this.pdtLength);
        if (!this.pickindex.includes(this.randnum)) {
          if (this.pickindex.push(this.randnum) === 4) {
            break;
          }
        }
      }
    });
  }

  // only 0~3
  getRandPdt(num: number) {
    if (this.pdts) {
      return this.pdts[this.pickindex[num]];
    }
  }

  ngOnInit() {  }

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
