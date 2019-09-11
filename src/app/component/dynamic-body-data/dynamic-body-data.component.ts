import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dynamic-body-data',
  templateUrl: './dynamic-body-data.component.html',
  styleUrls: ['./dynamic-body-data.component.scss']
})
export class DynamicBodyDataComponent implements OnInit {
  @Input() name:string
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
    console.log(this.name);
    this.router.navigate(["/pageOne"])
  }

}
