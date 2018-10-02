import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOtherDetailsComponent } from './company-other-details.component';

describe('CompanyOtherDetailsComponent', () => {
  let component: CompanyOtherDetailsComponent;
  let fixture: ComponentFixture<CompanyOtherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOtherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOtherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
