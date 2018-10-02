import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGodownMasterComponent } from './view-godown-master.component';

describe('ViewGodownMasterComponent', () => {
  let component: ViewGodownMasterComponent;
  let fixture: ComponentFixture<ViewGodownMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGodownMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGodownMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
