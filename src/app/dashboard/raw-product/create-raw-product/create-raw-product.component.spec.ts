import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRawProductComponent } from './create-raw-product.component';

describe('CreateRawProductComponent', () => {
  let component: CreateRawProductComponent;
  let fixture: ComponentFixture<CreateRawProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRawProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRawProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
