import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import {FormDataService} from '../../shared/services/form-data.service';
@Component({
  selector: 'app-setup-company',
  templateUrl: './setup-company.component.html',
  styleUrls: ['./setup-company.component.scss'
  			// '../../../app-assets/vendors/css/wizard.css'
  			]
})
export class SetupCompanyComponent implements OnInit {

    company_data: FormGroup;
  constructor(private fb:FormBuilder, private formService:FormDataService) {
  		
       formService.createNewForm(4);
          // this.company_data = fb.group({
          //   "company_name": ["CIS",Validators.required],
          //   "company_display_name": ["CIS",Validators.required],
          //   "company_fax_number":["123",Validators.required],
          //   "company_website":["",Validators.required],
          //   "company_ecc_number":["",Validators.required],
          //   "company_address_building_name":["",Validators.required],
          //   "company_address_road_name":["",Validators.required],
          //   "company_address_landmark":["",Validators.required],
          //   "company_address_pincode":["",Validators.required],
          //   "company_address_country":["",Validators.required],
          //   "company_address_state":["",Validators.required],
          //   "company_address_city":["",Validators.required],
          //   "company_address_godown_name":["",Validators.required],
          //   "company_address_godown_code":["",Validators.required],
          //   "company_godown_address_building_name":["",Validators.required],
          //   "company_godown_address_road_name":["",Validators.required],
          //   "company_godown_address_landmark":["",Validators.required],
          //   "company_godown_address_pincode":["",Validators.required],
          //   "company_godown_address_country":["",Validators.required],
          //   "company_godown_address_state":["",Validators.required],
          //   "company_godown_address_city":["",Validators.required],
          //   "company_bank_account_number":["",Validators.required],
          //   "company_bank_name":["",Validators.required],
          //   "company_bank_ifsc_code":["",Validators.required],
          //   "company_bank_address":["",Validators.required],
          //   "company_pan_number":["",Validators.required],
          //   "company_tan_number":["",Validators.required],
          //   "company_gst_number":["",Validators.required],
          //   "company_division_code":["",Validators.required],
          //   "company_cin_number":["",Validators.required],
          //   "company_logo_image":["",Validators.required]
          //    });

   }


  ngOnInit() {
		  	

  }

  onSubmit(company_data)
  {
     
  }
}
