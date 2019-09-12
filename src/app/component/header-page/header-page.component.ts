import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../services/toolBar/toolbar.service';
import { Router } from '@angular/router'
import { LoginService }  from '../../services/login/login.service'

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
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

  logOut() {
    localStorage.clear();
    this.loginService.invalidUser = true;
    this.router.navigate(['/login']);
  }
}
