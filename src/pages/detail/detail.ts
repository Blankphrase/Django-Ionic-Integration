import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
    statusItem: any;
    newObject: {title:string, id: number};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {   
      console.log(navParams)
      this.statusItem = navParams.get("statusItem")
      this.newObject = {
            title:navParams.get("statusItem"), id: 12
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}