import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGodownMasterComponent } from './create-godown-master.component';

describe('CreateGodownMasterComponent', () => {
  let component: CreateGodownMasterComponent;
  let fixture: ComponentFixture<CreateGodownMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGodownMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGodownMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
