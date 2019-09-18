import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivateChild, CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
    ) {}


  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if( await this.loginService.isLocalUser()) {
      // console.log("*P*",this.loginService.isLocalUser());
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }


  async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if( await this.loginService.isLocalUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
