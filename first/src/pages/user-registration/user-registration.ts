import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Response, RequestOptions, Headers} from '@angular/http';
import { ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";

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
    phone='';
    email='';
    passward='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegistration');
  }
  
  registration(){
    console.log(this.fname);


    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = {firstName:this.fname, lastName:this.lname, phoneNumber:this.phone, email:this.email, password:this.passward };
    
    this.http.post('http://localhost:3001/createNewRider', JSON.stringify(body), {headers: headers}).map(res=>res.json()).subscribe( data => {
        console.log(data);
        this.showToast('top');
        this.navCtrl.push(HomePage);
    });

  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Good Job, Rider Registered Successfully',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
