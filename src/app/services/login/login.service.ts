import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router:Router,
    private http: HttpClient ) {

  }


  async isLocalUser() {

    let tokenFromServer: object;
    await this.http.get("http://localhost:4002/api/token").toPromise().then( (d) => {
      // console.log("Token", d);
      tokenFromServer = d;
      console.log("**server**Token", tokenFromServer.token);
      console.log("**local**Token", localStorage.getItem("token"));
    });
    // console.log('CHK**', tokenFromServer);
    let localData = localStorage.getItem('token');
    if (localData === tokenFromServer.token) {
      return true;
    } else {
      console.log("in Else");
      return false;
    }

  }


  isAuthorizedUser = async (loginFormValue: any) => {

    let dataFromServer;
    await this.http.post("http://localhost:4002/api/isValid", loginFormValue).toPromise().then( (d) => {
      dataFromServer = d;
      // console.log("promice Resolved");
    });

    if(dataFromServer.isValid) {
      return dataFromServer.token
    } else {
      return "notValid";
    }
  }

}

