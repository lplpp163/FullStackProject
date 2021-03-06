import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  backend = `${environment.backend}`;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    localStorage.setItem('cpi', '0');
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data.slice(0, 6);
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
