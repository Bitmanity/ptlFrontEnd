import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-finished-product',
  templateUrl: './view-finished-product.component.html',
  styleUrls: ['./view-finished-product.component.scss']
})
export class ViewFinishedProductComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/finished-product/create');
  }

}
