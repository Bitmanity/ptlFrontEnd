import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChargesMasterComponent } from './create-charges-master.component';

describe('CreateChargesMasterComponent', () => {
  let component: CreateChargesMasterComponent;
  let fixture: ComponentFixture<CreateChargesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChargesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChargesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
