import { Component, OnInit } from '@angular/core';
// import * as tableData from '../../shared/data/smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-master-view',
  templateUrl: './bank-master-view.component.html',
  styleUrls: ['./bank-master-view.component.scss']
})

export class BankMasterViewComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      },
    columns: {
        id: {
        title: 'ID',
        filter: false,
        },
        name: {
        title: 'Full Name',
        filter: false,
        },
        username: {
        title: 'User Name',
        filter: false,
        },
        email: {
        title: 'Email',
        filter: false,
        },
    },
    attr: {
      class: "table table-responsive"
    },
    edit:{
      editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    delete:{
      deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    }
    
};
data = [
  {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
  },
  {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
  },
  {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
  },
  {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
  },
  {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
  }                                            
];


source: LocalDataSource;
  constructor(
    private router:Router,
  ) { 
    this.source = new LocalDataSource(this.data); // create the source                                       
  }

  ngOnInit() {
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/bank-master/new');
  }
}

