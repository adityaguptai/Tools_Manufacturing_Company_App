import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DailyProgressPage } from '../daily-progress/daily-progress';
import { InChargePage } from '../in-charge/in-charge';
//import { DailyProgressPage } from '../daily-progress/daily-progress';
import { ManagerPage } from '../manager/manager';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = InChargePage;
  //tab2Root: any = DailyProgressPage;
  tab3Root: any = ManagerPage;
  constructor(public navCtrl: NavController) {
  }
  goToDailyProgress(params){
    if (!params) params = {};
    this.navCtrl.push(DailyProgressPage);
  }
}
