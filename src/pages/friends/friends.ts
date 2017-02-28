import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Friends page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {
  friendslist: any[] = [
    {
      name: "Annie Ford",
      username: "annie.ford.94",
      gender: "women"
    }, {
      name: "Chase Skarda",
      username: "chase.skarda",
      gender: "men"
    }, {
      name: "Mark Muniz",
      username: "mark.muniz",
      gender: "men"
    }, {
      name: "Ellen Lipo",
      username: "ellen.lipo",
      gender: "women"
    }, {
      name: "Emma Frey",
      username: "emma.frey",
      gender: "women"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

}
