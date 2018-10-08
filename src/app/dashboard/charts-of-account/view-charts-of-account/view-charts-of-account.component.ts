import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-charts-of-account',
  templateUrl: './view-charts-of-account.component.html',
  styleUrls: ['./view-charts-of-account.component.scss']
})
export class ViewChartsOfAccountComponent implements OnInit {
  
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/charts-of-accounts/new');
  }

}
