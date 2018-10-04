import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../shared/services/share.service';
import { ApiService } from '../../../shared/services/api.service';
import { NotifyService } from '../../../shared/services/notify.service';


@Component({
  selector: 'app-create-unit-of-measurement',
  templateUrl: './create-unit-of-measurement.component.html',
  styleUrls: ['./create-unit-of-measurement.component.scss']
})
export class CreateUnitOfMeasurementComponent implements OnInit {

  active = 'today';
  debug = true;
  unit_data: FormGroup;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
	id: any = "new";
  uom: any;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) {
    this.unit_data = fb.group({
      "unit_name": ['Kg', Validators.required],
    });
  }
  
  resetErrorMessages(){
		this.errors = {			
			"id": [""],
			"unit_name": [""]	
		}
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
		this.apiService.get("admin/uom/"+id)
		.then(data => { 
			let l_data: any = data;
			this.unit_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(uom){
    this.notifyService.show({
      title: 'Success',
      message: 'Done'
    }, 'error');
		
		this.formTouched = true;
		if(uom.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/uom",uom.value).then( data => {
        let result: any = data;
				//success
        this.isProcessing = false;
        if(result.status == 'success')
							{
								this.notifyService.show({
									title: 'Success',
									message: result.message
								});
							}
							else{
									this.notifyService.show({
										title: 'Error',
										type : 'error',
										message: result.message
									});
							}
    
			})
			.catch( error => {
        this.isProcessing = false;
        let errors: any = error;
        this.errors = errors;
			})
		
  }


  toBack(){
    this.router.navigateByUrl('/dashboard/unit-of-measurement');
  }

}
