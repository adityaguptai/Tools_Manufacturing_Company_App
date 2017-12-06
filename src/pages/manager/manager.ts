import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportsPage } from '../reports/reports';
import { CustomerOrdersPage } from '../customer-orders/customer-orders';
import { QualityControlPage } from '../quality-control/quality-control';
import { InventoryPage } from '../inventory/inventory';
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html'
})
export class ManagerPage {

  constructor(public navCtrl: NavController) {
  }

  goToReports(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReportsPage);
  }
  goToCustomerOrders(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CustomerOrdersPage);
  }
  goToQualityControl(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QualityControlPage);
  }
  goToInventory(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InventoryPage);
  }

}
