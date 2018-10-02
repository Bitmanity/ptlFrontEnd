import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUnitOfMeasurementComponent } from './view-unit-of-measurement.component';

describe('ViewUnitOfMeasurementComponent', () => {
  let component: ViewUnitOfMeasurementComponent;
  let fixture: ComponentFixture<ViewUnitOfMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUnitOfMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUnitOfMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
