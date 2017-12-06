import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-place-order',
  templateUrl: 'place-order.html'
})
export class PlaceOrderPage {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
  }

  submit(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Order Placed Successfully',
      duration: 2000,
      position: position
    });

    toast.present(toast);

    this.navCtrl.push(PlaceOrderPage);

  }
}
