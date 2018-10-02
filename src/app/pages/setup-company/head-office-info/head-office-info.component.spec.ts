import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfficeInfoComponent } from './head-office-info.component';

describe('HeadOfficeInfoComponent', () => {
  let component: HeadOfficeInfoComponent;
  let fixture: ComponentFixture<HeadOfficeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadOfficeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfficeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
