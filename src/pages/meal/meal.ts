import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Keyboard } from 'ionic-native';


import { Observable } from 'rxjs';

import createNumberMask from 'text-mask-addons/dist/createNumberMask.js';

/*
  Generated class for the Meal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html'
})
export class MealPage {
  subtotal: number = 0;
  tip: number = 0;
  total: number = 0;
  tapTimer: any = null;
  keyboard: any = {
    open: false,
    height: 0
  }

  subtotalMask: any = createNumberMask({
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: false,
    allowDecimal: true,
    requireDecimal: true
  });
  tipMask: any = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator: false,
    integerLimit: 3,
    allowNegative: false,
    allowDecimal: true,
    requireDecimal: false
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.recalculate();

    Keyboard.hideKeyboardAccessoryBar(false);
    Keyboard.onKeyboardShow().subscribe((e) => this.onKeyboardOpen(e));
    Keyboard.onKeyboardHide().subscribe(() => this.onKeyboardClose());
  }

  onKeyboardClose() {
    this.keyboard.open = false;
  }

  onKeyboardOpen(e) {
    this.keyboard.height = e.keyboardHeight;
    this.keyboard.open = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealPage');
  }

  incrementSubtotal(step: number, timer: boolean = false): void {
    let increment = () => this.onSubtotalChange(Number(this.tip) + step);
    let subscription;
    if (timer) {
      subscription.unsubscribe();
    } else {
      increment();
    }
  }

  onPress(e) {
    console.log("Press");
    console.log(e);

    let interval = Observable.timer(750, 500);
    let subscription = interval.subscribe((x) => {
      this.incrementTip(0.01);
      console.log(x);

      if (x > 4) {
        console.log("STOP");
      }
    });

  }

  onRelease(e) {
    console.log("Release");
    console.log(e);
  }

  incrementTip(step: number, timer: boolean = false): void {
    let increment = () => this.onTipChange(Number(this.tip) + step);

    if (timer) {
      let timer = Observable.interval(1000);
      timer.subscribe(
        (success) => { console.log(success); increment(); },
        (error) => { return false }
      );
    } else {
      increment();
    }
  }

  onTipChange(value) {
    console.log(value);
    console.log("tip", Number(value))
    this.tip = Number(value);
    this.recalculate();
  }

  onSubtotalChange(value) {
    console.log("subtotal", Number(value))
    this.subtotal = Number(value);
    this.recalculate();
  }

  getTotal() {
    return this.subtotal * (1 + this.tip);
  }

  recalculate() {
    this.total = this.getTotal();
  }

}
