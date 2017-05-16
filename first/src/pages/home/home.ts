import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NewPlace } from "../new-place/new-place";
import { LandingPage } from '../landing-page/landing-page';
import { UserRegistration } from '../user-registration/user-registration';
import { OrdersToComplete } from '../orders-to-complete/orders-to-complete';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    uname='';
    passward='';
    loader: any;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public loadingCtrl: LoadingController) {

  }
  openIt(){
    this.navCtrl.push(NewPlace);
  }
  login(){    
        if((this.uname=="prageeth") && (this.passward=="123") ){
                this.presentLoading();
                
                setTimeout(() => {
    this.navCtrl.push(OrdersToComplete);
    },2000);
                
        }else{
        
            let alert = this.alertCtrl.create({
            title: 'Login Failed!',
            subTitle: 'Please check User credentials and try again!',
            buttons: ['OK']
            });
            alert.present();
          }
          
  }
  
  registration(){
    this.navCtrl.push(UserRegistration);
  }
  
   presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating...",
      duration: 3000
    });
    this.loader.present();
  }
  
  
}
