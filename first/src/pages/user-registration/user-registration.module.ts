import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserRegistration } from './user-registration';

@NgModule({
  declarations: [
    UserRegistration,
  ],
  exports: [
    UserRegistration
  ]
})
export class UserRegistrationModule {}
