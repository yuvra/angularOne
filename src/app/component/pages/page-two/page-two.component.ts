import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.view.html',
  styleUrls: ['./page-two.style.scss']
})
export class PageTwoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

}
