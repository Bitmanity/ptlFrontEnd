import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStockItemMasterComponent } from './view-stock-item-master.component';

describe('ViewStockItemMasterComponent', () => {
  let component: ViewStockItemMasterComponent;
  let fixture: ComponentFixture<ViewStockItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStockItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStockItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
