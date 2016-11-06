import { Component } from '@angular/core';
import { Taskdb } from '../taskdb/taskdb';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { Tasks } from '../tasks/tasks';
import { Calc } from '../calc/calc';
import { Products } from '../products/products';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Taskdb;
  tab2Root: any = Products;
  tab3Root: any = Tasks;
  tab4Root: any = Calc;
  constructor() {

  }
}
