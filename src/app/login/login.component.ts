import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthGuard} from '../shared/auth/auth-guard.service';
import{AuthService} from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
        user: FormGroup;
        errors:any;
        isProcessing:boolean = false;  
  constructor(fb: FormBuilder,private router:Router,private authService:AuthService) {
          this.user = fb.group({
            "email": ["jatinparmar96@gmail.com",Validators.required],
            "password": ["123",Validators.required],
          });
     }

  ngOnInit() {
      
  }
  onSubmit(user) {
    this.isProcessing= true;
     this.authService.signinUser(user.value).then((data)=>{
       let user:any = data
       console.log(user);
       if (user.status) {
         console.log(this.errors);
         this.isProcessing=false;
         this.router.navigateByUrl('/select-company');
       }
       else{
          this.isProcessing=false;
          this.errors = user.message;
          console.log(this.errors);
       }
     }).catch((error)=>{
       this.isProcessing=false;
        console.log(this.errors);
       this.errors = error.statusText;
     });
           
    
  }
  onForgotPassword()
 {
 		alert("You forgot Password");
 }
}
