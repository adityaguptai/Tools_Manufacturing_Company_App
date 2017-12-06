import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InChargePage } from '../pages/in-charge/in-charge';
import { OrdersPage } from '../pages/orders/orders';
import { ManagerPage } from '../pages/manager/manager';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { DailyProgressPage } from '../pages/daily-progress/daily-progress';
import { HomePage } from '../pages/home/home';
import { CustomerPage } from '../pages/customer/customer';
import { PlaceOrderPage } from '../pages/place-order/place-order';
import { ReportsPage } from '../pages/reports/reports';
import { CustomerOrdersPage } from '../pages/customer-orders/customer-orders';
import { QualityControlPage } from '../pages/quality-control/quality-control';
import { InventoryPage } from '../pages/inventory/inventory';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InChargePage,
    OrdersPage,
    ManagerPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    DailyProgressPage,
    HomePage,
    CustomerPage,
    PlaceOrderPage,
    ReportsPage,
    CustomerOrdersPage,
    QualityControlPage,
    InventoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InChargePage,
    OrdersPage,
    ManagerPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    DailyProgressPage,
    HomePage,
    CustomerPage,
    PlaceOrderPage,
    ReportsPage,
    CustomerOrdersPage,
    QualityControlPage,
    InventoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
