import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../services/toolBar/toolbar.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { TREE_DATA, FoodNode } from '../../shared/data/data';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.view.html',
  styleUrls: ['./body.style.scss']
})
export class BodyComponent implements OnInit {

  constructor(
    public ToolbarService: ToolbarService,
    private router: Router,
  ) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {

  }


  nodeName = '';

  private _transformer = (node: FoodNode, level: number) => {

    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      id: node.id
    };

  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  expandableNode(node) {

    console.log("expandable Node pressed!", node);

  }

  leafNode(node) {

    // console.log("leaf Node pressed!", node);
    this.ToolbarService.setDataDisplayId(node.id);
    this.nodeName = node.name;
    this.navigation(node.id);
    this.sideClick();

  }

  navigation(id) {

    let routeName = 'sideNav/pageOne';
    if (id % 2 !== 0) {
      routeName = "sideNav/pageTwo"
    }
    this.router.navigate([routeName]);

  }

  sideClick() {

    // console.log("Body Clicked!!");
    const tooBarVisible = this.ToolbarService.getNavBar();
    if (tooBarVisible) {
      this.ToolbarService.setNavBar();
    }
  }

}
