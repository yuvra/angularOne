import { Component, OnInit } from '@angular/core';

import { LoginService }  from '../../services/login/login.service'
import { Router } from '@angular/router';
import { ToolbarService } from '../../services/toolBar/toolbar.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.view.html',
  styleUrls: ['./header-page.style.scss']
})
export class HeaderPageComponent implements OnInit {

  constructor(
    public ToolbarService: ToolbarService,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
  }

  handleToolBarVisible() {
    console.log('t p');
  }

  logOut(): void {
    localStorage.clear();
    // this.loginService.invalidUser = true;
    this.router.navigate(['/login']);
  }
}
