import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { ShareService } from '../../../shared/services/share.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifyService } from '../../../shared/services/notify.service';


@Component({
  selector: 'app-create-charts-of-account',
  templateUrl: './create-charts-of-account.component.html',
  styleUrls: ['./create-charts-of-account.component.scss']
})
export class CreateChartsOfAccountComponent implements OnInit {

  active= 'today';
  coa_data: FormGroup;
  chartOfAccounts: FormGroup;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
	id: any = "new";
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) 
  {
    this.coa_data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
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
      "ca_date_opened":['06/06/1992',Validators.required],
    });
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params['id'])
			if(params['id']=='new'){
				this.id="new";
			}else{
				this.id = +params['id']; // (+) converts string 'id' to a number
				this.getData(this.id);
			}
    });
    
  
  }
  
  getData(id:any){
		this.apiService.get("admin/coa/"+id)
		.then(data => { 
			let l_data: any = data;
			this.coa_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(coa){		
		this.formTouched = true;
		if(coa.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/coa",coa.value).then( data => {
        let result: any = data;
				//success
        this.isProcessing = false;
        if(result.status)
							{
								this.notifyService.show({
									title: 'Success',
									message: result.message
								},'success');
							}
							else{
									this.notifyService.show({
										title: 'Error',
										message: result.message
									}, 'error');
							}
    
			})
			.catch( error => {
        this.isProcessing = false;
        let errors: any = error;
        this.errors = errors;
			})
		
  }
  resetErrorMessages(){
		this.errors = {			
      "ca_company_name": [""],
      "ca_company_display_name": [""],
      "ca_category": [""],
      "ca_code": [""],
      "ca_opening_amount": [""],
      "ca_opening_type": [""],
      "ca_first_name": [""],
      "ca_last_name": [""],
      "ca_mobile_number": [""],
      "ca_fax": [""],
      "ca_email": [""],
      "ca_website": [""],
      "ca_designation": [""],
      "ca_branch": [""],
      "ca_address_building": [""],
      "ca_address_road_name": [""],
      "ca_address_landmark": [""],
      "ca_address_pincode": [""],
      "ca_address_country": [""],
      "ca_address_state": [""],
      "ca_address_city": [""],
      "ca_pan": [""],
      "ca_gstn": [""],
      "ca_tan": [""],
      "ca_date_opened": [""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/charts-of_account');
  }

}
