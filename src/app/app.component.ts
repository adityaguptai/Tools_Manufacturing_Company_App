import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ManagerPage } from '../pages/manager/manager';
import { CustomerPage } from '../pages/customer/customer';
import { OrdersPage } from '../pages/orders/orders';
import { PlaceOrderPage } from '../pages/place-order/place-order';
import { HomePage } from '../pages/home/home';
import { InChargePage } from '../pages/in-charge/in-charge';
import { ReportsPage } from '../pages/reports/reports';
import { CustomerOrdersPage } from '../pages/customer-orders/customer-orders';
import { QualityControlPage } from '../pages/quality-control/quality-control';
import { InventoryPage } from '../pages/inventory/inventory';
//import { ReportsPage } from '../pages/in-charge/in-charge';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = InChargePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToInCharge(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InChargePage);
  }goToManager(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ManagerPage);
  }goToCustomer(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CustomerPage);
  }goToOrders(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OrdersPage);
  }goToPlaceOrder(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PlaceOrderPage);
  }goToReports(params){
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
}
