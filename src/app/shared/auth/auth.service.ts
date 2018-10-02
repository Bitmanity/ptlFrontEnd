import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { ApiService } from '../services/api.service';
import { JwtHelper} from 'angular2-jwt';

import { ShareService } from '../services/share.service';
import { reject } from 'q';


export const endPoint= 'http://127.0.0.1:8000/api/';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();
  token:any = null;
  constructor(
        private http:HttpClient,
        private apiService:ApiService,
        private shareService:ShareService
  ) {}

  signupUser(user) {
   let registered:any =0;
     return new Promise((register,error)=>{
       this.apiService.post('auth/signup',user).then((data)=>{
        let user:any = data;
        console.log('Sign up Auth Service '+user);
        this.token = user;
        this.updateToken(user.token)
         register(user);
       }).catch((er)=>
       {
         console.log(er.error.error.errors)
           error(er.error.error.errors);
       }) 
     })
  }

  signinUser(user) {
      return new Promise((login,reject)=>{
        this.apiService.post('auth/login',user).then((data)=>{
            let user :any = data;
            console.log('Sign in Auth Service '+user);
            if (user.status) {
               this.token = user;
              this.updateToken(user.token)
            }

            else {
                this.token = null;
            }
            login(user);

          }).catch((error)=>{
              this.token = null;
              reject(error);
          })
      })
  }

  setCompany(company_id)
  {
      return new Promise((resolve,reject)=>{
          this.apiService.post('admin/setCompany/'+company_id,company_id).then(data=>{
            let user:any = data;
            console.log(user);
           if(user.status){
              this.token = user;
              this.updateToken(user.token)
              resolve(user);
            }

          })
      }).catch(error=>{
        reject(error)
      })
  }
  updateToken(token){

    let decode_user = this.jwtHelper.decodeToken(token);
    this.shareService.setCurrentUser(decode_user);
    localStorage.setItem('x-auth-token',token);
    return decode_user;
  }

  logout() {   
    this.token = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
  
      if (this.token!==null) {
        return true;
      }
      else{
        return false;
      }
  }
}
