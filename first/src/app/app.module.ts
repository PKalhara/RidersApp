import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPlace } from '../pages/new-place/new-place';
import { NewOrder } from '../pages/new-order/new-order';
import { MyOrders } from '../pages/my-orders/my-orders';
import { LandingPage } from '../pages/landing-page/landing-page';
import { UserRegistration } from '../pages/user-registration/user-registration';
import { OrdersToComplete } from '../pages/orders-to-complete/orders-to-complete';
import { Auth } from '../providers/auth';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlace,
    NewOrder,
    MyOrders,
    LandingPage,
    UserRegistration,
    OrdersToComplete
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlace,
    NewOrder,
    MyOrders,
    LandingPage,
    UserRegistration,
    OrdersToComplete
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth
  ]
})
export class AppModule {}
