import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockItemMasterComponent } from './create-stock-item-master.component';

describe('CreateStockItemMasterComponent', () => {
  let component: CreateStockItemMasterComponent;
  let fixture: ComponentFixture<CreateStockItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
