import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router:Router,
  ) { }

  userName: string;
  password: string;
  invalidUser = true;

  validateUser(loginForm:any):void{
    console.log(loginForm);
    if(loginForm.userName.trim() === 'yuvraj' && loginForm.password.trim() === 'mane') {
      localStorage.setItem('userName', loginForm.userName.trim());
      // console.log('stored');
      this.invalidUser = false;
      this.router.navigate(['/sideNav']);
      // return true;
    } else {
      // console.log(this.userName,this.password);
      this.invalidUser = true;
      // return false;
    }
  }

  isLocalUser():boolean {
    let localData = localStorage.getItem('userName');
    if(localData === "yuvraj") {
      this.invalidUser = false;
      return true;
    } else {
      this.invalidUser = true;
      return false;
    }

  }
}
