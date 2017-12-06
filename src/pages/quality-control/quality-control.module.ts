import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QualityControlPage } from './quality-control';

@NgModule({
  declarations: [
    QualityControlPage,
  ],
  imports: [
    IonicPageModule.forChild(QualityControlPage),
  ],
})
export class QualityControlPageModule {}
