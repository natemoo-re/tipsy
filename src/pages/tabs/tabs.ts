import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage, MealPage, FriendsPage } from '../'

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = SettingsPage;
  tab2Root: any = MealPage;
  tab3Root: any = FriendsPage;

  constructor(public navCtrl: NavController) {

  }

}
