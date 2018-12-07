import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product;
  backend = `${environment.backend}`;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private cartService: CartService, private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProduct(this.id).subscribe((data: Product) => {
      this.product = data;
    });
  }

  get userLevel() {
    return (Number(localStorage.getItem('user_level')));
  }

  get myDiscount() {
    return Number(localStorage.getItem('discount'));
  }

  add(id) {
    this.cartService.add(id).subscribe((data: any) => {
      if (data.success) {
        this.cartService.refresh();
      }
    });
  }

}
