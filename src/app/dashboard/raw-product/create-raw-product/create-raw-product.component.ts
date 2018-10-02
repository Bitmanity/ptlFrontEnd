import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-raw-product',
  templateUrl: './create-raw-product.component.html',
  styleUrls: ['./create-raw-product.component.scss']
})
export class CreateRawProductComponent implements OnInit {

  jwtHelper:JwtHelper = new JwtHelper();
  rawProduct: FormGroup;
  uoms:any;
  isProcessing:boolean = false;
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private formService:FormDataService,
    private router:Router,
  ) { 
    this.apiService.get('admin/getUom').then(data=>{
      let units:any = data
      if(units.status)
      {
        this.uoms = units.uoms;
        
      }
    
    }).catch(error=>{
      console.error(error);
    })
    
    this.rawProduct = this.fb.group({

      "raw_product_name":['PName',Validators.required],
      "raw_product_display_name":['PDisplayName',Validators.required],
      "raw_product_code":['PC@123',Validators.required],
      "raw_product_uom":['KG',Validators.required],
      "raw_product_conv_uom":['kg',Validators.required],
      "raw_product_conv_factor":['1',Validators.required],
      "raw_product_batch_type":['0',Validators.required],
      "raw_product_maintain_stock_ledger":['1',Validators.required],
      "raw_product_opening_stock":['10',Validators.required],
      "raw_product_opening_amount":['1000',Validators.required],
      "raw_product_store_location":['G1',Validators.required],
      // "raw_product_purchase_rate":['111',Validators.required],
      // "raw_product_sales_rate":['12',Validators.required],
      "raw_product_mrp_rate":['12',Validators.required],
      "raw_product_gst_slot":['28%',Validators.required],
      "raw_product_max_level":['2134',Validators.required],
      "raw_product_min_level":['1212',Validators.required],
      "raw_product_reorder_level":['12',Validators.required],
      "raw_product_description":['abc',Validators.required],
      "raw_product_rate_pick_from":['',Validators.required],
      "raw_product_product_category":['',Validators.required],
      "raw_product_hsn_code":['',Validators.required],
    });

  }

  ngOnInit() {
     
  }

  onSubmit(data)
  {
    this.isProcessing = true
   this.formService.storeData('admin/storeRawProduct',data.value).then(data=>{
      let status:any = data
      if(status.status){
        this.isProcessing = false
        alertFunctions.typeSuccess('Raw Product added Successfully');
      }
   })
   .catch(error=>{
    this.isProcessing = false
     console.log(error);
   })
  }
  toBack(){
    this.router.navigateByUrl('/dashboard/raw-product');
  }
}

