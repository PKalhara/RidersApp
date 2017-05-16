import { MyApp } from '..app/app.component';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OrdersToComplete } from './orders-to-complete';


@NgModule({
  declarations: [
    OrdersToComplete,
  ],
  exports: [
    OrdersToComplete
  ]
})
export class OrdersToCompleteModule {}
