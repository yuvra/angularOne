import { Component, HostListener } from '@angular/core';
import { ToolbarService } from '../../services/toolBar/toolbar.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public innerWidth: any;
  toolBarVisible = true;

  constructor(ToolbarService: ToolbarService) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    // console.log("width", this.innerWidth);
    if (parseInt(this.innerWidth) <= 923) {
      this.toolBarVisible = false;
    } else {
      this.toolBarVisible = true;
    }
  }

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      // console.log(this.innerWidth);
      if (parseInt(this.innerWidth) <= 923) {
        this.toolBarVisible = false;
      }
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22 ];



  handleToolBarVisible () {
    console.log("Inside toolBarVisible", this.toolBarVisible);
    // this.toolBarVisible = !this.toolBarVisible;
  }

}
