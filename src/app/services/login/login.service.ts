import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router:Router,
    private http: HttpClient ) {

  }

  // private userName: string;

  async isLocalUser() {

    let tokenFromServer: any;
    await this.http.get("http://13.235.173.50:4002/api/token").toPromise().then( (d) => {
      // console.log("Token", d);
      tokenFromServer = d;
      console.log("**server**Token", tokenFromServer.token);
      console.log("**local**Token", localStorage.getItem("token"));
    });

    // console.log('UserName', this.userName);

    let localData = localStorage.getItem('token');
    if (localData) {
      return true;
    } else {
      // console.log("in Else");
      return false;
    }

  }


  isAuthorizedUser = async (loginFormValue: any) => {

    let dataFromServer: any;
    await this.http.post("http://13.235.173.50:4002/api/isValid", loginFormValue).toPromise().then( (d) => {
      dataFromServer = d;
      // console.log("promice Resolved");
    });

    if(dataFromServer.isValid) {
      // this.userName = loginFormValue.userName;
      return dataFromServer.token
    } else {
      return "notValid";
    }
  }


  async signUp(userSignUpdata: object) {

    let dataFromServer: any;
    await this.http.post("http://13.235.173.50:4002/api/CreateUser", userSignUpdata).toPromise().then(
      (d) => {
        dataFromServer = d;
      }
    );

   return dataFromServer;

  }

}

