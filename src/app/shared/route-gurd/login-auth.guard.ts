import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private loginService: LoginService,
    private router: Router,
    ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.loginService.isLocalUser()) {
      return true;
    } else {
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.loginService.isLocalUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
