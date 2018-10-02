import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-godown-master',
  templateUrl: './view-godown-master.component.html',
  styleUrls: ['./view-godown-master.component.scss']
})
export class ViewGodownMasterComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  toCreate()
  {
    this.router.navigateByUrl('/dashboard/godown-master/create');
  }
}
