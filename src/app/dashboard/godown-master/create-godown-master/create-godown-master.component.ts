import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { ShareService } from '../../../shared/services/share.service';
import { NotifyService } from '../../../shared/services/notify.service';

@Component({
  selector: 'app-create-godown-master',
  templateUrl: './create-godown-master.component.html',
  styleUrls: ['./create-godown-master.component.scss']
})
export class CreateGodownMasterComponent implements OnInit {

  active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  // Replacable
  godown_data: FormGroup;
  godown: any;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) {
    this.godown_data = fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
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
		this.apiService.get("admin/godown/"+id)
		.then(data => { 
			let l_data: any = data;
			this.godown_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(godown){
    // this.notifyService.show({
    //   title: 'Success',
    //   message: 'Done'
    // }, 'success');
		
		this.formTouched = true;
		if(godown.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/godown",godown.value).then( data => {
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
      "godown_name": [""],
      "godown_code": [""],
      "godown_address_building_name": [""],
      "godown_address_road_name": [""],
      "godown_address_landmark": [""],
      "godown_address_country": [""],
      "godown_address_state": [""],
      "godown_address_city": [""],
      "godown_address_pincode": [""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/unit-of-measurement');
  }
// 3 Ends
}
