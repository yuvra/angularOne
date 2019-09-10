import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../services/toolBar/toolbar.service';

@Component({
  selector: 'app-toolbar-page',
  templateUrl: './toolbar-page.component.html',
  styleUrls: ['./toolbar-page.component.scss']
})
export class ToolbarPageComponent implements OnInit {

  constructor(
    public ToolbarService: ToolbarService,
  ) { }

  ngOnInit() {
  }
  collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

  renderDynBody (item) {
    this.ToolbarService.setData(item);
    console.log("item", item);
  }
}
