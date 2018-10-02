import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryMasterRoutingModule } from './inventory-master-routing.module';
import { CreateStockItemMasterComponent } from './stock-item-master/create-stock-item-master/create-stock-item-master.component';
import { ViewStockItemMasterComponent } from './stock-item-master/view-stock-item-master/view-stock-item-master.component';


@NgModule({
  imports: [
    CommonModule,
    InventoryMasterRoutingModule
  ],
  declarations: [CreateStockItemMasterComponent, ViewStockItemMasterComponent]
})
export class InventoryMasterModule { }
