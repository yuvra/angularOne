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
  invalidUser = false;

  getUserName() {
    return this.userName;
  }

  setUserName(event: any):void {
    console.log("Service uName",event);
    this.userName = event.target.value;
    console.log(this.userName);
  }

  getPassword() {
    return this.password;
  }

  setPassword(event: any):void {
    console.log("Service Pass",event);
    this.password = event.target.value;
    console.log(this.password);
  }

  isValidUser():boolean {
    if(this.userName.trim() === 'yuvraj' && this.password.trim() === 'mane') {
      localStorage.setItem('userName',this.userName);
      console.log('stored');
      this.invalidUser = false;
      this.router.navigate(['/sideNav']);
      return true;
    } else {
      console.log(this.userName,this.password);
      this.invalidUser = true;
      return false;
    }
  }

  isLocalUser():boolean {
    let localData = localStorage.getItem('userName');
    if(localData === "yuvraj") {
      return true;
    } else {
      return false;
    }

  }
}
