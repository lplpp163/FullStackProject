import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopwindowComponent } from './shopwindow.component';

describe('ShopwindowComponent', () => {
  let component: ShopwindowComponent;
  let fixture: ComponentFixture<ShopwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
