import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-unit-of-measurement',
  templateUrl: './create-unit-of-measurement.component.html',
  styleUrls: ['./create-unit-of-measurement.component.scss']
})
export class CreateUnitOfMeasurementComponent implements OnInit {
  active = 'today';
  debug = true;
  unit_data: FormGroup;
  constructor(
    private fb: FormBuilder,
    private formService: FormDataService,
    private router:Router,
  ) {
    this.unit_data = fb.group({
      "unit_name": ['Kg', Validators.required],
    });
  }

  ngOnInit() {}
  onSubmit(unit_data) {
    this.formService.storeData('admin/addUom', unit_data.value).then(data => {
      let status: any = data
      if (this.debug) {

      }
      if (status.status) {
        alertFunctions.typeSuccess('Unit added Successfully')
      }
    }).catch(error => {
      if (this.debug) {
        console.log(error)
      }
    })
  }
  toBack(){
    this.router.navigateByUrl('/dashboard/unit-of-measurement');
  }

}
