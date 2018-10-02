import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillOfMaterialComponent } from './create-bill-of-material.component';

describe('CreateBillOfMaterialComponent', () => {
  let component: CreateBillOfMaterialComponent;
  let fixture: ComponentFixture<CreateBillOfMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBillOfMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBillOfMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
