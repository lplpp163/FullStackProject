import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ProductModule {
  public id: number;
  public name: string;
  public price: number;
  public description: string;
}
