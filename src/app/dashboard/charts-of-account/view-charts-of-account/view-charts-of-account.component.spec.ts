import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChartsOfAccountComponent } from './view-charts-of-account.component';

describe('ViewChartsOfAccountComponent', () => {
  let component: ViewChartsOfAccountComponent;
  let fixture: ComponentFixture<ViewChartsOfAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChartsOfAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChartsOfAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
