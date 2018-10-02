import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { FormDataService } from '../../shared/services/form-data.service';
import * as alertFunctions from '../../shared/data/sweet-alert';


@Component({
  selector: 'app-billofmaterial',
  templateUrl: './billofmaterial.component.html',
  styleUrls: ['./billofmaterial.component.scss']
})
export class BillofmaterialComponent implements OnInit {
  active= 'today';
  billOfMaterial: FormGroup;
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private formService:FormDataService,
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
}