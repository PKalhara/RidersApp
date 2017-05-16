import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NewOrder } from './new-order';

@NgModule({
  declarations: [
    NewOrder,
  ],
  exports: [
    NewOrder
  ]
})
export class NewOrderModule {}
