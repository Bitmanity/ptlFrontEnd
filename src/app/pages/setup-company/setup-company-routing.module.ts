import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyInfoComponent} from './company-info/company-info.component'
import { Routes, RouterModule } from '@angular/router';
import {HeadOfficeInfoComponent} from './head-office-info/head-office-info.component';

const routes:Routes = [
  {
    path:'BranchDetails',
    component:HeadOfficeInfoComponent
  },
  {
    path: '',
     component: CompanyInfoComponent,
    data: {
      title: 'Company Information'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupCompanyRoutingModule { }
