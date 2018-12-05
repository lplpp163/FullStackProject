import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedwindowComponent } from './relatedwindow.component';

describe('RelatedwindowComponent', () => {
  let component: RelatedwindowComponent;
  let fixture: ComponentFixture<RelatedwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
