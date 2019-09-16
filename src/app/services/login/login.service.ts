import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:4002/api/login';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router:Router,
    private http: HttpClient,
  ) { }

  userName: string;
  password: string;
  invalidUser = true;


  validateUser(loginForm:any):void{
    console.log(loginForm);
    if(loginForm.userName.trim() === 'yuvraj' && loginForm.password.trim() === 'mane') {
      localStorage.setItem('userName', loginForm.userName.trim());
      this.invalidUser = false;
      this.router.navigate(['/sideNav']);
    } else {
      this.invalidUser = true;
    }
  }

   isLocalUser():boolean {
    this.testApi();
    let localData = localStorage.getItem('userName');
    if(localData === "yuvraj") {
      this.invalidUser = false;
      return true;
    } else {
      this.invalidUser = true;
      return false;
    }

  }

  testApi = async() => {
    let data = await this.http.get(endpoint).pipe(
      map(this.log)
    );
    console.log("Data From api mongo", data);
  }


  log = (res: Response) => {
    console.log("daat", res);
  }
}

