import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LoginService }  from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.view.html',
  styleUrls: [ './login.style.scss' ]
})
export class LoginComponent implements OnInit {

  constructor(public LoginService: LoginService,
              private router: Router) {
  }

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {

  }


  async onSubmit() {

    let data = await this.LoginService.isAuthorizedUser(this.loginForm.value);
    if (data === 'notValid') {
      window.alert("you are not Valid User");
    } else {
      localStorage.setItem('token', data)
      this.router.navigate(['/sideNav']);
    }
  }

  signUp() {
    this.router.navigate(['/signUp']);
  }

}
