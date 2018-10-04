import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import{FormDataService} from '../../../shared/services/form-data.service';
import { Router, ActivatedRoute } from '@angular/router';

const current_step = 2;
@Component({
  selector: 'app-head-office-info',
  templateUrl: './head-office-info.component.html',
  styleUrls: ['./head-office-info.component.scss']
})
export class HeadOfficeInfoComponent implements OnInit {
  id:any;
 company_data:FormGroup;
  constructor(private fb:FormBuilder,
    private fdService:FormDataService,
    private router:Router,
    private route:ActivatedRoute) { 
    
      this.id = route.snapshot.paramMap.get('id');
      let data:any = this.fdService.getStepData(current_step); 
    let buffer:any=['','','','']
    if(data !== undefined)
    {
      buffer = Object.keys(data).map(i => data[i]);
    }

  		  this.company_data = fb.group({
            "company_address_building":[buffer[0],Validators.required],
            "company_address_road_name":[buffer[1],Validators.required],
            "company_address_landmark":[buffer[2],Validators.required],
            "company_address_pincode":[buffer[3],Validators.required],
            "company_address_country":[buffer[4],Validators.required],
            "company_address_state":[buffer[5],Validators.required],
            "company_address_city":[buffer[6],Validators.required],
          });
  }

  ngOnInit() {
  }

  toNext(data)
  {
    this.fdService.toNext(data.value,current_step);
    this.router.navigateByUrl('setupCompany/BankDetails/');
    // this.fdService.storeData('admin/addHeadBranch/',data.value).then(data=>{
    //   console.log(data)
      
    // })
    // .catch(error=>{
    //   console.error(error)
    // })
  }
  toPrevious(data)
  {
   
   this.fdService.toPrevious(data.value,current_step);
   console.log(this.fdService.getData());
   this.router.navigateByUrl('setupCompany/OtherDetails/');
  }
}
