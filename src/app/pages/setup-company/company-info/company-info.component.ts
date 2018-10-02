import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{FormDataService} from '../../../shared/services/form-data.service';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../../../shared/auth/auth.service';
const current_step:number = 0;
@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  company_data:FormGroup;
  
  constructor(
    private router:Router , 
    private fdService:FormDataService,
    private fb:FormBuilder,
    private authService:AuthService) {
      let data:any = this.fdService.getStepData(current_step); 
      let buffer:any=['','','','']
      if(data !== undefined)
      {
        buffer = Object.keys(data).map(i => data[i]);
      }
      this.company_data = fb.group({
            "company_name": [buffer[0],Validators.required],
            "company_display_name": [buffer[1],Validators.required],
            "company_fax_number":[buffer[2]],
            "company_website":[buffer[3]]
          });
   }
  ngOnInit() {
  }

  get f() { return this.company_data.controls; }

  get company_name() {return this.company_data.get('company_name');}
  toNext(data)
  {
    if(this.company_data.invalid)
    {
      return;
    }
    this.fdService.toNext(data.value,current_step);
    this.fdService.storeData('admin/company',data.value).then(data=>{
        let l_data:any = data;
        let token = l_data.token;
        this.authService.updateToken(token);
        this.router.navigateByUrl('setupCompany/OtherDetails/');
     
    });
  }
}
