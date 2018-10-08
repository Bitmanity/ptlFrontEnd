import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../shared/services/share.service';
import { NotifyService } from '../../../shared/services/notify.service';

@Component({
  selector: 'app-create-charges-master',
  templateUrl: './create-charges-master.component.html',
  styleUrls: ['./create-charges-master.component.scss']
})
export class CreateChargesMasterComponent implements OnInit {

  active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";

  charges_data: FormGroup;
  charges: any;
  
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) { 
    this.charges_data = this.fb.group({
      "charges_master_name":['',Validators.required],
      "charges_master_charge_type":['Excise Duty',Validators.required],
      "charges_master_purchase_account":['32',Validators.required],
      "charges_master_sales_account":['3',Validators.required],
      "charges_master_percentage":['2',Validators.required],
      "charges_master_decimal_place":['1',Validators.required],
  })
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
		this.apiService.get("admin/charges/"+id)
		.then(data => { 
			let l_data: any = data;
			this.charges_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(charges){
  	this.formTouched = true;
		if(charges.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/charges",charges.value).then( data => {
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
      "charges_master_name": [""],
      "charges_master_charge_type": [""],
      "charges_master_purchase_account": [""],
      "charges_master_sales_account": [""],
      "charges_master_percentage": [""],
      "charges_master_decimal_place": [""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/charges-master');
  }

}
