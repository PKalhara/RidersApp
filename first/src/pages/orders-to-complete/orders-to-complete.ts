import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../landing-page/landing-page';
import { Http,Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

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
    posts: any;
    searchQuery: string = '';
    items: string[];
    

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.data= [{id: '1' , name: 'prageeth'},
                {id: '2' , name: 'kamal'},
                {id: '3' , name: 'suneth'}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersToComplete');
    console.log(this.navParams.get('rid'));
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = { rid: this.navParams.get('rid')};
    
    this.http.post('http://localhost:3001/getAllriders', JSON.stringify(body), {headers: headers}).map(res=>res.json()).subscribe( data => {
        console.log(data);
        this.data=data;
        this.items=data;
    });


  }
  
  viewMore(i){
    
    this.navCtrl.push(LandingPage, {id: i,rid: this.navParams.get('rid')});
  }

  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
