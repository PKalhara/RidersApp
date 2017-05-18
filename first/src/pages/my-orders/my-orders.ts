import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Response, RequestOptions, Headers} from '@angular/http';


/**
 * Generated class for the MyOrders page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html',
})
export class MyOrders {

   searchQuery: string = '';
  items: string[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
   
  }
  
  
   initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Matale',
      'Kandy',
      'Colombo',
      'Malabe',
      'Rathnapura'
    ];
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyOrders');
    console.log(this.navParams.get('rid'));

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = { id: this.navParams.get('rid')};
    
    this.http.post('http://localhost:3001/getAccepetedOrders', JSON.stringify(body), {headers: headers}).map(res=>res.json()).subscribe( data => {
        console.log(data);
        this.items=data;

    });

  }
  
    getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

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
