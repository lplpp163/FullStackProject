import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { RelatedwindowComponent } from './relatedwindow/relatedwindow.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductsListComponent,
    ProductDetailComponent
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    DetailComponent,
    RelatedwindowComponent,
  ]
})
export class ProductsModule { }
