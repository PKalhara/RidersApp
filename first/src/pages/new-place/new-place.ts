import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyOrders } from "../my-orders/my-orders";

/**
 * Generated class for the NewPlace page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlace {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  openIt(){
      this.navCtrl.push(MyOrders);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlace');
  }

}
