import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinishedProductComponent } from './create-finished-product.component';

describe('CreateFinishedProductComponent', () => {
  let component: CreateFinishedProductComponent;
  let fixture: ComponentFixture<CreateFinishedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFinishedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFinishedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
