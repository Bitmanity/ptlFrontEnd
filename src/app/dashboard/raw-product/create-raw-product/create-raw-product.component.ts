import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../shared/services/share.service';
import { NotifyService } from '../../../shared/services/notify.service';


@Component({
  selector: 'app-create-raw-product',
  templateUrl: './create-raw-product.component.html',
  styleUrls: ['./create-raw-product.component.scss']
})
export class CreateRawProductComponent implements OnInit {

  active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  data:any;
  taxData:any;

  raw_product_data: FormGroup;
  raw_product: any;
  taxes: any;
  productCategories: any;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) { 
    apiService.get('admin/uom_full_list').then(data=>{
      console.log(data);
      let l_data:any = data;
      if(l_data.status)
      {
        this.data = l_data.data
      }
  })
  apiService.get('admin/tax_full_list').then(taxData=>{
    console.log(taxData);
    let l_taxData:any = taxData;
    if(l_taxData.status)
    {
      this.taxes = l_taxData.data
    }
})
apiService.get('admin/product_category_full_list').then(productCategoryData=>{
  console.log(productCategoryData);
  let l_product_category_data:any = productCategoryData;
  if(l_product_category_data.status)
  {
    this.productCategories = l_product_category_data.data
    
  }
})

    this.raw_product_data = this.fb.group({
      "id":['new',Validators.required],
      "raw_product_name":['PName',Validators.required],
      "raw_product_display_name":['PDisplayName',Validators.required],
      "raw_product_code":['PC@123',Validators.required],
      "raw_product_uom":['KG',Validators.required],
      "raw_product_conv_uom":['kg',Validators.required],
      "raw_product_conv_factor":['1',Validators.required],
      "raw_product_batch_type":['0',Validators.required],
      "raw_product_maintain_stock_ledger":['1',Validators.required],
      "raw_product_mrp_rate":['12',Validators.required],
      "raw_product_rate_pick_from":['',Validators.required],
      "raw_product_purchase_rate":['676878',Validators.required],
      "raw_product_sales_rate":['90999',Validators.required],
      "raw_product_gst_slot":['28%',Validators.required],
      "raw_product_max_level":['2134',Validators.required],
      "raw_product_min_level":['1212',Validators.required],
      "raw_product_description":['abc',Validators.required],
      "raw_product_category":['',Validators.required],
      "raw_product_hsn":['786876',Validators.required],
    });
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
		this.apiService.get("admin/raw_product/"+id)
		.then(data => { 
			let l_data: any = data;
			this.raw_product_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(raw_product){

		this.formTouched = true;
		// if(raw_product.invalid){
		// 	return false;
		// }
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/raw_product",raw_product.value).then( data => {
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
      "raw_product_name": [""],
      "raw_product_display_name": [""],
      "raw_product_code": [""],
      "raw_product_raw_product": [""],
      "raw_product_conv_raw_product": [""],
      "raw_product_conv_factor": [""],
      "raw_product_batch_type": [""],
      "raw_product_maintain_stock_ledger": [""],
      "raw_product_mrp_rate": [""],
      "raw_product_gst_slot": [""],
      "raw_product_max_level": [""],
      "raw_product_min_level": [""],
      "raw_product_description": [""],
      "raw_product_rate_pick_from": [""],
      "raw_product_product_category": [""],
      "raw_product_hsn_code": [""], 
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/unit-of-measurement');
  }
// 3 Ends
}
