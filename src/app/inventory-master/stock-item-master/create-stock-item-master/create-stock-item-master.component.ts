import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';

@Component({
  selector: 'app-create-stock-item-master',
  templateUrl: './create-stock-item-master.component.html',
  styleUrls: ['./create-stock-item-master.component.scss']
})
export class CreateStockItemMasterComponent implements OnInit {
  stockItemMaster:FormGroup
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private formService:FormDataService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.stockItemMaster = this.fb.group({
      "charges_master_display_name":['',Validators.required],
      "charges_master_charge_type":['',Validators.required],
      "charges_master_purchase_account":['',Validators.required],
      "charges_master_sales_account":['',Validators.required],
      "raw_product_purchase_percentage":['',Validators.required],
      "charges_master_decimal_place":['',Validators.required],
  })
}
  toBack(){
    this.router.navigateByUrl('/inventory-master/stock-item-master');
  }

}
