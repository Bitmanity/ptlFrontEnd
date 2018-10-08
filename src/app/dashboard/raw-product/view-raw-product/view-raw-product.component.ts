import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-raw-product',
  templateUrl: './view-raw-product.component.html',
  styleUrls: ['./view-raw-product.component.scss']
})
export class ViewRawProductComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/raw-product/new');
  }


}
