import { Component, OnInit } from '@angular/core';
import { LoginService }  from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public LoginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    if( this.LoginService.isLocalUser() ) {
      this.router.navigate(['/sideNav']);
    }
  }

  setUserName(event) {
    this.LoginService.setUserName(event)
  }

  setPassword(event) {
    this.LoginService.setPassword(event)
  }

  isValidUser() {
    this.LoginService.isValidUser();
  }

  validationErr():boolean {
    return this.LoginService.invalidUser;
  }
}
