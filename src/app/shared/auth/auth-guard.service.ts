import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import { ShareService } from '../services/share.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
  		private authService: AuthService,
  		private router:Router,
  		private shareService:ShareService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    console.log(this.authService.getToken());
    if (this.authService.isAuthenticated()) {
     	return true;
     } 
     else{
     		this.router.navigateByUrl('/login');
     		return false;
     }


  }

}
