import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserRegistration page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-registration',
  templateUrl: 'user-registration.html',
})
export class UserRegistration {

    fname='';
    lname='';
    email='';
    passward='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegistration');
  }
  
  registration(){
    console.log(this.fname);
  }

}
