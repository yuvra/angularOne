import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LoginService }  from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }
  private errMsg: any = "";



  changeErrMsg(msg: string) {
    this.errMsg = msg;
  }

  async onSignUpPress() {
    // window.alert("SP", this.loginForm.value);
    let res =  await this.loginService.signUp(this.loginForm.value);
    // window.alert(res);
    console.log(res);
    if(res.err) {
      this.errMsg = res.err;
    } else {
      this.router.navigate(['/login']);
    }
  }

}
