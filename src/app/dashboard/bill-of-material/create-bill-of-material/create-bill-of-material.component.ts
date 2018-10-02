import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bill-of-material',
  templateUrl: './create-bill-of-material.component.html',
  styleUrls: ['./create-bill-of-material.component.scss']
})
export class CreateBillOfMaterialComponent implements OnInit {
  active= 'today';
  billOfMaterial: FormGroup;
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private formService:FormDataService,
    private router:Router,
  ) 
  {
   
  }
  ngOnInit() {
    this.billOfMaterial= this.fb.group({
      "bill_of_material_name":['name',Validators.required],
      "bill_of_material_number":['name',Validators.required],
      "bill_of_material_date":['name',Validators.required],
      "bill_of_material_rev_name":['name',Validators.required],
      "bill_of_material_rev_date":['name',Validators.required],
      "bill_of_material_Name":['name',Validators.required],
    
      
    })
    
  }
  onSubmit(data)
  {
   this.formService.storeData('admin/billOfMaterial',data.value).then(data=>{
      let status:any = data
      if(status.status){
        alertFunctions.typeSuccess('BOM added Successfully');
      }
   })
   .catch(error=>{
     console.log(error);
   })
  }
  toBack(){
    this.router.navigateByUrl('/dashboard/finished-product');
  }
}