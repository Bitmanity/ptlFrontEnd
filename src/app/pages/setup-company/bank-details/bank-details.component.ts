import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../../shared/services/form-data.service';
import { Router,ActivatedRoute } from '@angular/router';

const current_step = 2;
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
  company_data:FormGroup;
  
  constructor(private fb:FormBuilder,
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
    this.fdService.storeData('admin/addBank',data.value).then(data=>{

          this.router.navigateByUrl('dashboard');
    })
  
  }
  toPrevious(data)
  {
   this.fdService.toPrevious(data.value,current_step);
   this.router.navigateByUrl('setupCompany/BranchDetails');
  }
}
