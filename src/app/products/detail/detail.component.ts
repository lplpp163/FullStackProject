import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

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

  add(id) {
    this.cartService.add(id).subscribe((data: any) => {
      if (data.success) {
        location.reload();
      }
    });
  }

}
