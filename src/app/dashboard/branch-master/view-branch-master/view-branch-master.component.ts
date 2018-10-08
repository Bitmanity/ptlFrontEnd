import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-branch-master',
  templateUrl: './view-branch-master.component.html',
  styleUrls: ['./view-branch-master.component.scss']
})
export class ViewBranchMasterComponent implements OnInit {
  rows: any;

  constructor(
        private router:Router,
  ) { }

  ngOnInit() {

  }
  toNext()
  {
    this.router.navigateByUrl('/dashboard/branch-master/new');
  }


}
