import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LandingPage } from './landing-page';

@NgModule({
  declarations: [
    LandingPage,
  ],
  exports: [
    LandingPage
  ]
})
export class LandingPageModule {}
