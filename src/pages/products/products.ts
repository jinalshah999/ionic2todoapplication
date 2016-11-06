import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductList } from '../product-list/product-list';
/*
  Generated class for the Products page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class Products {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Products Page');
  }
selectCategory(str:string){
  this.navCtrl.push(ProductList,{item:str});
}
}
