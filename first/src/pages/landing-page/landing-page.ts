import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewPlace } from "../new-place/new-place";
import { Http,Response, RequestOptions, Headers} from '@angular/http';
import { MyOrders } from '../my-orders/my-orders';
import { OrdersToComplete } from '../orders-to-complete/orders-to-complete';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html',
})
export class LandingPage {
   orderData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = { id: this.navParams.get('id')};
    
    this.http.post('http://localhost:3001/getOrderDetails', JSON.stringify(body), {headers: headers}).map(res=>res.json()).subscribe( data => {
        console.log(data);
        this.orderData=data;
    });

  }
  openIt(){
    this.navCtrl.push(NewPlace);
  }

  accept(oid){

    

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = { id: oid};
    
    this.http.post('http://localhost:3001/setAccepeted', JSON.stringify(body), {headers: headers}).map(res=>res.json()).subscribe( data => {
        
    });
    this.showToast('top');
    this.navCtrl.push(MyOrders,{rid: this.navParams.get('rid')});

  }

  reject(oid){
    

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = { id: oid};
    
    this.http.post('http://localhost:3001/setRejected', JSON.stringify(body), {headers: headers}).map(res=>res.json()).subscribe( data => {
        console.log(data);
    });
    this.showToastReject('top');
    this.navCtrl.push(OrdersToComplete,{rid: this.navParams.get('rid')});

  }


  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Order Accepted',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  showToastReject(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Order Rejected',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
