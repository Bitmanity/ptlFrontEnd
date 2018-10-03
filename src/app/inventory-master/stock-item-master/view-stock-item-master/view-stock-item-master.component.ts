import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-stock-item-master',
  templateUrl: './view-stock-item-master.component.html',
  styleUrls: ['./view-stock-item-master.component.scss']
})
export class ViewStockItemMasterComponent implements OnInit {

  

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  toCreate()
  {
    this.router.navigateByUrl('/inventory-master/stock-item-master/create');
  }
}
