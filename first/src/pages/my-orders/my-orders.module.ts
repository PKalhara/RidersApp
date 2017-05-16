import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyOrders } from './my-orders';

@NgModule({
  declarations: [
    MyOrders,
  ],
  exports: [
    MyOrders
  ]
})
export class MyOrdersModule {}
