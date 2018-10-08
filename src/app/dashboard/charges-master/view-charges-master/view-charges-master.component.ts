import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-charges-master',
  templateUrl: './view-charges-master.component.html',
  styleUrls: ['./view-charges-master.component.scss']
})
export class ViewChargesMasterComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/charges-master/new');
  }

}
