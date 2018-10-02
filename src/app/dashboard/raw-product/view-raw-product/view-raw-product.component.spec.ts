import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRawProductComponent } from './view-raw-product.component';

describe('ViewRawProductComponent', () => {
  let component: ViewRawProductComponent;
  let fixture: ComponentFixture<ViewRawProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRawProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRawProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
