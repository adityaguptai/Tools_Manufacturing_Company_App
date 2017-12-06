import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdersPage } from '../orders/orders';
import { PlaceOrderPage } from '../place-order/place-order';

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class CustomerPage {

  constructor(public navCtrl: NavController) {
  }
  goToOrders(params){
    if (!params) params = {};
    this.navCtrl.push(OrdersPage);
  }goToPlaceOrder(params){
    if (!params) params = {};
    this.navCtrl.push(PlaceOrderPage);
  }
}
