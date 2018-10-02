import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStockItemMasterComponent } from './stock-item-master/create-stock-item-master/create-stock-item-master.component';
import { ViewStockItemMasterComponent } from './stock-item-master/view-stock-item-master/view-stock-item-master.component';


const routes: Routes = [
  {
    path: 'stock-item-master/create',
    component: CreateStockItemMasterComponent
  },
  {
    path: 'stock-item-master',
    component: ViewStockItemMasterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryMasterRoutingModule { }
