import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  isClicked = [false, false, false, false];

  ngOnInit() {
  }
  // buttonClick(keyword, index) {
  //   this.productsService.search(keyword);
  //   for (const i of [0, 1, 2, 3, 4]) {this.isClicked[i] = false; }
  //   this.isClicked[index] = true;
  // }

}
