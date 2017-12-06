import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-in-charge',
  templateUrl: 'in-charge.html'
})
export class InChargePage {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
  }
  submit(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Submitted Successfully',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }
}
