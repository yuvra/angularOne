import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loginService: LoginService) {
  }
  isLocal;
  ngOnInit() {
    this.isLocal = localStorage.getItem("userName");
    console.log( "1stTime",this.isLocal);
  }
  title = 'myapp1';
}
