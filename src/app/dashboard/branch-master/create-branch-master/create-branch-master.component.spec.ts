import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBranchMasterComponent } from './create-branch-master.component';

describe('CreateBranchMasterComponent', () => {
  let component: CreateBranchMasterComponent;
  let fixture: ComponentFixture<CreateBranchMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBranchMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBranchMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
