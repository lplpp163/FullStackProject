import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ShopwindowComponent } from './shopwindow/shopwindow.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShopwindowComponent
  ]
})
export class CoreModule { }
