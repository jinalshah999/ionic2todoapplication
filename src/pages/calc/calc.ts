import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Calc page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class Calc {

ans:number=0;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Calc Page');
  }

add(num1:any,num2:any){
  this.ans= parseInt(num1)+parseInt(num2);
}
}
