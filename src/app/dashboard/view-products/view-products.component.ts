import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import * as tableData from '../../shared/data/smart-data-table';  
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  settings = tableData.settings;
  tableData:any
  constructor(
    private apiService:ApiService
  ) { 
    this.apiService.get('admin/getRawProducts').then(data=>{
      let l_data:any = data
      if(l_data.status)
      {
        this.tableData = l_data.raw_products
      }

    })
  }

  ngOnInit() {
  }

}
