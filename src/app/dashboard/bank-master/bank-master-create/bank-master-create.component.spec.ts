import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankMasterCreateComponent } from './bank-master-create.component';

describe('BankMasterCreateComponent', () => {
  let component: BankMasterCreateComponent;
  let fixture: ComponentFixture<BankMasterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankMasterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankMasterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
