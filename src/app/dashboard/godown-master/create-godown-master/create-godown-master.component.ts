import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-godown-master',
  templateUrl: './create-godown-master.component.html',
  styleUrls: ['./create-godown-master.component.scss']
})
export class CreateGodownMasterComponent implements OnInit {
  godown_data :FormGroup
  isProcessing:boolean
  constructor(
    private fb:FormBuilder,
    private formService:FormDataService,
    private router:Router,
  ) {
    this.godown_data = fb.group({
      "godown_name":["Demo Godon Name",Validators.required],
      "godown_code":["GD001",Validators.required],
      "godown_address_building_name":["Sample Building Name",Validators.required],
      "godown_address_road_name":["Sample Road Name",Validators.required],
      "godown_address_landmark":["Sample Landmark Name",Validators.required],
      "godown_address_pincode":["415465",Validators.required],
      "godown_address_country":["India",Validators.required],
      "godown_address_state":["Maharashtra",Validators.required],
      "godown_address_city":["Mumbai",Validators.required],
    
    })
   }

  ngOnInit() {
  }
  onSubmit(godown_data)
  {
    this.isProcessing = true
    this.formService.storeData('admin/addGodown',godown_data.value).then(data=>{
        let status:any = data
        if(status.status)
        {
          alertFunctions.typeSuccess('Godown added Successfully');
        }
        else{

        }
    }).catch(error=>{
      this.isProcessing = false;
      console.log(error)
    })
  }
  toBack(){
    this.router.navigateByUrl('/dashboard/godown-master');
  }
}
