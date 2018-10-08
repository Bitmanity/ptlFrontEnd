import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { ShareService } from '../../../shared/services/share.service';
import { NotifyService } from '../../../shared/services/notify.service';


@Component({
  selector: 'app-create-branch-master',
  templateUrl: './create-branch-master.component.html',
  styleUrls: ['./create-branch-master.component.scss']
})
export class CreateBranchMasterComponent implements OnInit {

  active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  data:any;
  branch_data :FormGroup;
  branch:any;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) { 
    apiService.get('admin/bank_full_list').then(data=>{
        let l_data:any = data;
        if(l_data.status)
        {
          this.data = l_data.data
          console.log(this.data)
        }
    })
    this.branch_data = fb.group({
      "id":['new',Validators.required],
      "address_id":['new',Validators.required],
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
      "branch_bank_id":["",Validators.required],
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
		this.apiService.get("admin/branch/"+id)
		.then(data => { 
			let l_data: any = data;
			this.branch_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(branch){
		this.formTouched = true;
		// if(branch.invalid){
		// 	return false;
    // }
    // console.log(branch.value)
    // return false;
    this.formTouched = true;
		if(branch.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/branch",branch.value).then( data => {
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
			"branch_name": [""],
      "branch_code": [""],	
      "branch_gst_number": [""],
      "branch_address_building_name": [""],
      "branch_address_road_name": [""],
      "branch_address_landmark": [""],
      "branch_address_pincode": [""],
      "branch_address_country": [""],
      "branch_address_state": [""],
      "branch_address_city": [""],
      "branch_bank_id": [""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/branch-master');
  }
// 3 Ends
}
