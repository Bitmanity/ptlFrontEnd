import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';


@Component({
  selector: 'app-create-branch-master',
  templateUrl: './create-branch-master.component.html',
  styleUrls: ['./create-branch-master.component.scss']
})
export class CreateBranchMasterComponent implements OnInit {
  branch_data :FormGroup
  banks:any;
  isProcessing:boolean
  constructor(
    private fb:FormBuilder,
    private apiService: ApiService,
    private formService:FormDataService,
    private router:Router,
  ) { 
    apiService.get('admin/getBanks').then(data=>{
      let banks:any = data
      if(banks.status)
      {
        this.banks = banks.banks
      }
    })
    this.branch_data = fb.group({
      "branch_name":["Demo Branch Name",Validators.required],
      "branch_code":["BC001",Validators.required],
      "branch_gst_number":["GST7ZXY123IWX",Validators.required],
      "branch_address_building_name":["Sample Building Name",Validators.required],
      "branch_address_road_name":["Sample Road Name",Validators.required],
      "branch_address_landmark":["Sample Landmark Name",Validators.required],
      "branch_address_pincode":["415465",Validators.required],
      "branch_address_country":["India",Validators.required],
      "branch_address_state":["Maharashtra",Validators.required],
      "branch_address_city":["Mumbai",Validators.required],
      "branch_bank":["BOI",Validators.required],
    
    })
  }

  ngOnInit() {
  }

  onSubmit(branch_data)
  {
    this.isProcessing = true
    this.formService.storeData('admin/addBranch',branch_data.value).then(data=>{
        let status:any = data
        if(status.status)
        {
          alertFunctions.typeSuccess('Branch added Successfully');
        }
        else{

        }
    }).catch(error=>{
      console.log(error)
      this.isProcessing = false;
    })
  }

  toBack(){
    this.router.navigateByUrl('/dashboard/branch-master');
  }
}
