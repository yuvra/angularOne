import { Component, OnInit } from '@angular/core';
import { LoginService }  from '../../services/login/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

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

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  validationErr():boolean {
    return this.LoginService.invalidUser;
  }

  onSubmit() {
    this.LoginService.validateUser(this.loginForm.value);
  }
}
