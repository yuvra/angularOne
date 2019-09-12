import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    if (this.loginService.isLocalUser()) {
      this.router.navigate(['/sideNav']);
    }
  }

}

