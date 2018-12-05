import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsliderComponent } from './shopslider.component';

describe('ShopsliderComponent', () => {
  let component: ShopsliderComponent;
  let fixture: ComponentFixture<ShopsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
