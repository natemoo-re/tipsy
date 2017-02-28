import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Imports } from './app.modules/imports';
import { MyApp }   from './app.component';
import { TabsPage, SettingsPage, MealPage, FriendsPage }   from '../pages';


@NgModule({
  declarations: [
    MyApp,
    TabsPage, SettingsPage, MealPage, FriendsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ...Imports
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage, SettingsPage, MealPage, FriendsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
