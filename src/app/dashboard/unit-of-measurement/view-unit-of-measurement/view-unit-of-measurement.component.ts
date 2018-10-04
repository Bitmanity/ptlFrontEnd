import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';



@Component({
  selector: 'app-view-unit-of-measurement',
  templateUrl: './view-unit-of-measurement.component.html',
  styleUrls: ['./view-unit-of-measurement.component.scss']
})
export class ViewUnitOfMeasurementComponent implements OnInit {
  
  rows:any

  constructor(
    private router:Router,
    private apiService:ApiService
  ) { 
    apiService.get('admin/uom').then(data=>{
      let l_data :any = data
      if(l_data.status)
      {
        console.log(l_data);
        this.rows =(l_data.data);    

      }
    }).catch(error =>{
      console.error(error);
    })
    
  }

  ngOnInit() {
  }

  toCreate()
  {
    this.router.navigateByUrl('/dashboard/unit-of-measurement/new');
  }
}
