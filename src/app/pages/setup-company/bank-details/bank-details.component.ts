import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../../shared/services/form-data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/auth/auth.service';

const current_step = 3;
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
  company_data:FormGroup;
  
  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private fdService:FormDataService,
    private router:Router,
    private route:ActivatedRoute) {
    let data:any = this.fdService.getStepData(current_step); 
    let buffer:any=['','','','']
    if(data !== undefined)
    {
      buffer = Object.keys(data).map(i => data[i]);
    }
    this.company_data = fb.group({
      "bank_account_number":[buffer[0],Validators.required],
      "bank_name":[buffer[1],Validators.required],
      "bank_ifsc_code":[buffer[2],Validators.required],
      "bank_branch":[buffer[3],Validators.required],
    });
   }
   
  ngOnInit() {
  }
  
  toNext(data)
  {
    let id = this.route.snapshot.paramMap.get('id');
    this.fdService.toNext(data.value,current_step);
    let formData:any = this.fdService.getData();
    let output:any;
    output = {...formData[0],...formData[1],...formData[2],...formData[3]}
    
    this.fdService.storeData('admin/company_wizard',output).then(data=>{
          let l_data:any = data;
          console.log(data);
          if(l_data.status)
          {
            this.authService.updateToken(l_data.token);
            this.router.navigateByUrl('dashboard');
            
          }
      
     }).catch(error =>{
       console.error(error)
     })
  }
  toPrevious(data)
  {
   this.fdService.toPrevious(data.value,current_step);
   this.router.navigateByUrl('setupCompany/BranchDetails/');
  }
}
