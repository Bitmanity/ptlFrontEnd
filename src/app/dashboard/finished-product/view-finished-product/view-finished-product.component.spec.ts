import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinishedProductComponent } from './view-finished-product.component';

describe('ViewFinishedProductComponent', () => {
  let component: ViewFinishedProductComponent;
  let fixture: ComponentFixture<ViewFinishedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFinishedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFinishedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
