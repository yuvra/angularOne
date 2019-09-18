import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-template',
  templateUrl: './code-template.view.html',
  styleUrls: ['./code-template.component.scss']
})
export class CodeTemplateComponent implements OnInit {
  @Input() name;
  constructor() { }

  ngOnInit() {
    console.log("name in child name", this.name);
  }

}
