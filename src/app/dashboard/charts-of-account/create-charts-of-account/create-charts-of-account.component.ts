import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';


@Component({
  selector: 'app-create-charts-of-account',
  templateUrl: './create-charts-of-account.component.html',
  styleUrls: ['./create-charts-of-account.component.scss']
})
export class CreateChartsOfAccountComponent implements OnInit {

  active= 'today';
  chartOfAccounts: FormGroup;
  Router: any;
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private formService:FormDataService,
    private router:Router,
  ) 
  {
   
  }

  ngOnInit() {
    this.chartOfAccounts= this.fb.group({
      "ca_company_name":['Bitmanity',Validators.required],
      "ca_company_display_name":['Bitmanity LLP',Validators.required],
      "ca_category":['Creditor',Validators.required],
      "ca_code":['0090',Validators.required],
      "ca_opening_amount":['89000',Validators.required],
      "ca_opening_type":['Creditor',Validators.required],
      "ca_first_name":['Jatin',Validators.required],
      "ca_last_name":['Parmar',Validators.required],
      "ca_mobile_number":['9856478964',Validators.required],
      "ca_fax":['Fax123456',Validators.required],
      "ca_email":['jatinparmar96@gmail.com',Validators.required],
      "ca_website":['https://website.com',Validators.required],
      "ca_designation":['Managing director',Validators.required],
      "ca_branch":['Saphale',Validators.required],
      "ca_address_building":['Rose123',Validators.required],
      "ca_address_road_name":['Station Road',Validators.required],
      "ca_address_landmark":['opp Sbi Bank',Validators.required],
      "ca_address_pincode":['401125',Validators.required],
      "ca_address_country":['India',Validators.required],
      "ca_address_state":['Maharastra',Validators.required],
      "ca_address_city":['Mumbai',Validators.required],
      "ca_pan":['Pan 123',Validators.required],
      "ca_gstn":['GSTIN123',Validators.required],
      "ca_tan":['TAN123',Validators.required],
      "ca_commodity":['Comm123',Validators.required],
      "ca_ecc_no":['ECC156',Validators.required],
      "ca_rc_no":['RC124',Validators.required],
      "ca_division":['Div001',Validators.required],
      "ca_range":['cr_500',Validators.required],
      "ca_commissionerate":['Comm12',Validators.required],
      "ca_tin_no":['TIN123',Validators.required],
      "ca_date_opened":['06/06/1992',Validators.required],
      "ca_cst_no":['CST123',Validators.required],
    })
  }

  onSubmit(data)
  {
   this.formService.storeData('admin/chartOfAccounts',data.value).then(data=>{
      let status:any = data
      if(status.status){
        alertFunctions.typeSuccess('Account added Successfully');
      }
   })
   .catch(error=>{
     console.log(error);
   })
  }
  toBack(){
    this.router.navigateByUrl('/dashboard/charts-of-accounts');
  }
  
}