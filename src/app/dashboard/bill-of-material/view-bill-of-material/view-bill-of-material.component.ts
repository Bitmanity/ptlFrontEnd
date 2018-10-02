import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-bill-of-material',
  templateUrl: './view-bill-of-material.component.html',
  styleUrls: ['./view-bill-of-material.component.scss']
})
export class ViewBillOfMaterialComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/bill-of-material/create');
  }
}
