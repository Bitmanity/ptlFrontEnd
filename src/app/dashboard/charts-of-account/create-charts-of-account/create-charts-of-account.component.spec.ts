import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChartsOfAccountComponent } from './create-charts-of-account.component';

describe('CreateChartsOfAccountComponent', () => {
  let component: CreateChartsOfAccountComponent;
  let fixture: ComponentFixture<CreateChartsOfAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChartsOfAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChartsOfAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
