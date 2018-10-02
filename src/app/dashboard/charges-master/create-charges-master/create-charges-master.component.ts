import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-charges-master',
  templateUrl: './create-charges-master.component.html',
  styleUrls: ['./create-charges-master.component.scss']
})
export class CreateChargesMasterComponent implements OnInit {
  chargeMaster:FormGroup
  isProcessing:boolean= false;
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private formService:FormDataService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.chargeMaster = this.fb.group({
        "charges_master_display_name":['',Validators.required],
        "charges_master_charge_type":['',Validators.required],
        "charges_master_purchase_account":['',Validators.required],
        "charges_master_sales_account":['',Validators.required],
        "raw_product_purchase_percentage":['',Validators.required],
        "charges_master_decimal_place":['',Validators.required],
    })
  }

  onSubmit(chargeMaster)
  {
    this.isProcessing = true;
    this.formService.storeData('admin/addCharges',chargeMaster.value).then(data=>{
          let status :any = data 
          if(status.status){
            
          }
    })
  }
  toBack(){
    this.router.navigateByUrl('/dashboard/charges-master');
  }

}
