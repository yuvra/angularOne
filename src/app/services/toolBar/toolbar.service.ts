import { Injectable } from '@angular/core';
import { childData, TREE_DATA } from '../../shared/data/data'

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  constructor() {
    this.sideNavBarVisible =  window.innerWidth <= 923 ? false : true;
  }

  sideNavBarVisible: boolean;
  data: number = 0;
  dataDisplayId: number = 0;
  txtData:string;
  name: string;

  setData(num:number){
    this.data = num;
  }

  getData() {
    return this.data;
  }

  setNavBar ():void {
    this.sideNavBarVisible = !this.sideNavBarVisible;
  }

  getNavBar():boolean {
    return this.sideNavBarVisible;
  }

  getDataDisplayId():number {
    return this.dataDisplayId;
  }

  setDataDisplayId(num: string):void {
    this.dataDisplayId = parseInt(num);
  }

  getText() {
    childData.map((d) => {
      if(d.id === this.dataDisplayId) {
        this.txtData = d.txt;
        this.name = d.name;
      }
    });
    return { name: this.name, txt: this.txtData }
  }

}
