import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../landing-page/landing-page';

/**
 * Generated class for the OrdersToComplete page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-orders-to-complete',
  templateUrl: 'orders-to-complete.html',
})
export class OrdersToComplete {
    data: any;
    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data= [{id: '1' , name: 'prageeth'},
                {id: '2' , name: 'kamal'},
                {id: '3' , name: 'suneth'}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersToComplete');
  }
  
  viewMore(i){
    
    this.navCtrl.push(LandingPage, {id: i});
  }

}
