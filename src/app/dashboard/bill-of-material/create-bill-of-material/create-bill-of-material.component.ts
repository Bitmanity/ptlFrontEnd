import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifyService } from '../../../shared/services/notify.service';
import { ShareService } from '../../../shared/services/share.service';

@Component({
  selector: 'app-create-bill-of-material',
  templateUrl: './create-bill-of-material.component.html',
  styleUrls: ['./create-bill-of-material.component.scss']
})
export class CreateBillOfMaterialComponent implements OnInit {

active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";

  cbom_data: FormGroup;
  cbom: any;
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
    this.cbom_data= this.fb.group({
      "bill_of_material_name":['name',Validators.required],
      "bill_of_material_number":['name',Validators.required],
      "bill_of_material_date":['name',Validators.required],
      "bill_of_material_rev_name":['name',Validators.required],
      "bill_of_material_rev_date":['name',Validators.required],
      "bill_of_material_Name":['name',Validators.required],
    
      
    })
  }
  
  ngOnInit() {
    // 2 Starts
    this.route.params.subscribe(params => {
      console.log(params['id'])
			if(params['id']=='new'){
				this.id="new";
			}else{
				this.id = +params['id']; // (+) converts string 'id' to a number
				this.getData(this.id);
			}
    });
    // 2 Ends
  
  }
  // 3 Starts
  getData(id:any){
		this.apiService.get("admin/cbom/"+id)
		.then(data => { 
			let l_data: any = data;
			this.cbom_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(cbom){
    // this.notifyService.show({
    //   title: 'Success',
    //   message: 'Done'
    // }, 'success');
		
		this.formTouched = true;
		if(cbom.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/cbom",cbom.value).then( data => {
        let result: any = data;
				//success
        this.isProcessing = false;
        if(result.status == 'success')
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
			"id": [""],
			"unit_name": [""]	
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/unit-of-measurement');
  }
// 3 Ends
}
