import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-unit-of-measurement',
  templateUrl: './view-unit-of-measurement.component.html',
  styleUrls: ['./view-unit-of-measurement.component.scss']
})
export class ViewUnitOfMeasurementComponent implements OnInit {
  

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  toCreate()
  {
    this.router.navigateByUrl('/dashboard/unit-of-measurement/create');
  }
}
