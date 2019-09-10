import { Component, OnInit, HostListener } from '@angular/core';
import { ToolbarService } from '../../services/toolBar/toolbar.service';
import { LoginService } from '../../services/login/login.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav-mat',
  templateUrl: './side-nav-mat.component.html',
  styleUrls: ['./side-nav-mat.component.scss']
})
export class SideNavMatComponent implements OnInit {
  constructor(
    public ToolbarService: ToolbarService,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
      if ( !this.loginService.isLocalUser() ) {
        this.router.navigate(['/login']);
      }
  }

}
