import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../services/toolBar/toolbar.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  constructor(
    public ToolbarService: ToolbarService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  handleToolBarVisible() {
    console.log('t p');
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
