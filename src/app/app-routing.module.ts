import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import {RegisterComponent} from "./register/register.component";
import {SetupCompanyComponent} from "./pages/setup-company/setup-company.component";
import {LoginComponent} from "./login/login.component";
import {CompanyInfoComponent} from "./pages/setup-company/company-info/company-info.component";
import {HeadOfficeInfoComponent} from "./pages/setup-company/head-office-info/head-office-info.component";


import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';
import { BankDetailsComponent } from './pages/setup-company/bank-details/bank-details.component';
import { CompanyOtherDetailsComponent } from './pages/setup-company/company-other-details/company-other-details.component';
import { MainComponent } from './dashboard/main/main.component';
import { SelectCompanyComponent } from './pages/select-company/select-company.component';


const appRoutes: Routes = [
  // {
  //   path: 'loogin',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
  	path:'login',
  	component:LoginComponent,
  	data:{
  		title:'Login Existing User'
  	}
  },
  {
  	path:'register',
  	component:RegisterComponent,
  	data:{
  		title:'Register New User'
  	}
    
  },
  {
    path:'setupCompany',
    component:SetupCompanyComponent,
    data:{
      title:'Setup Company'
    },
   // canActivate: [AuthGuard],
    children: [
        {
          path:'BranchDetails/',
          component:HeadOfficeInfoComponent
        },
        {
          path:"BankDetails/",
          component:BankDetailsComponent
        },
        {
          path:"OtherDetails/",
          component:CompanyOtherDetailsComponent
        },
      {
        path:'',
        component:CompanyInfoComponent
      }
     
    ]
  },
  {
      path:'',
      component:FullLayoutComponent,
      children:Full_ROUTES,
      // data:{
      // title:'Dashboard'
      // },
       //canActivate: [AuthGuard] 
  },
//   {
//     path:'inventory-master',
//     component:FullLayoutComponent,
//     children:Full_ROUTES,
//      //canActivate: [AuthGuard] 
// },

  {
    path: 'select-company',
    component: SelectCompanyComponent,
    data: {
      title: 'Content Layout page'
    },
   
},
  { 
    path: '',
    component: FullLayoutComponent, 
    data: { title: 'full Views' },
    children: Full_ROUTES, 
     //canActivate: [AuthGuard] 
  },

  { 
    path: '', 
    component: ContentLayoutComponent, 
    data: { title: 'content Views' },
    children: CONTENT_ROUTES, 
   
 },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
