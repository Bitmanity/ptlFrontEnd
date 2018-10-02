import { Component, OnInit, ViewChild } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth/auth.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss']
})
export class SelectCompanyComponent implements OnInit {
  jwtHelper:JwtHelper = new JwtHelper();
  companies:any = [];
  user:any;
  company_data: FormGroup;	
  isProcessing = false;
  constructor(
    fb:FormBuilder, 
    private authService:AuthService,
    private router:Router) { 

    this.user = this.jwtHelper.decodeToken(localStorage.getItem('x-auth-token'));
    this.companies = this.user.companies;
    this.company_data = fb.group({
      "company_id": ["",Validators.required]
    });
   
  }

  ngOnInit() {
    
  }
  onSubmit(data)
  {
   this.isProcessing= true;
   this.authService.setCompany(data.value).then(data=>{
     let user:any = data;
     if (user.status)
     {
       this.router.navigateByUrl('/dashboard');
     }
   }).catch(error=>
  {
    console.log("Error in select Company Page "+error);
  });
  }

}
