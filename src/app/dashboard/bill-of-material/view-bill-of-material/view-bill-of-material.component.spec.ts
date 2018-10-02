import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillOfMaterialComponent } from './view-bill-of-material.component';

describe('ViewBillOfMaterialComponent', () => {
  let component: ViewBillOfMaterialComponent;
  let fixture: ComponentFixture<ViewBillOfMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBillOfMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBillOfMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
