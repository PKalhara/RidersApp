import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NewPlace } from "../new-place/new-place";
import { LandingPage } from '../landing-page/landing-page';
import { UserRegistration } from '../user-registration/user-registration';
import { OrdersToComplete } from '../orders-to-complete/orders-to-complete';
import { LoadingController } from 'ionic-angular';
import { Http,Response, RequestOptions, Headers} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    uname='';
    passward='';
    loader: any;
    arr=[];
    booleanValue: any;
    riderID: any;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public http: Http) {

  }
  openIt(){
    this.navCtrl.push(NewPlace);
  }
  login(){   

        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        const body = { uname: this.uname ,passward: this.passward};
        this.http.post('http://localhost:3001/validateRiderLogin', JSON.stringify(body), {headers: headers}).map(res=>res.json()).subscribe( data => {
        this.booleanValue=data;

        });

        
        const bodyT = { uname: this.uname };
        this.http.post('http://localhost:3001/getRiderId', JSON.stringify(bodyT), {headers: headers}).map(res=>res.json()).subscribe( data => {
        console.log(data[0].id);
        this.riderID=data[0].id;
        });

        if(this.booleanValue==true){
                this.presentLoading();
                
                 setTimeout(() => {
                 this.navCtrl.push(OrdersToComplete, {rid: this.riderID});
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
