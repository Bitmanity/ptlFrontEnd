import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChargesMasterComponent } from './view-charges-master.component';

describe('ViewChargesMasterComponent', () => {
  let component: ViewChargesMasterComponent;
  let fixture: ComponentFixture<ViewChargesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChargesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChargesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
