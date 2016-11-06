import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Product } from '../products/product';
import { Productdata } from '../../providers/productdata';

/*
  Generated class for the ProductDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetails {
p:Product[]=[];
selectedProduct:Product;
  constructor(public navCtrl: NavController,public navParam:NavParams,public _productdata:Productdata){
this.selectedProduct=navParam.get('item');
this.p=this._productdata.getProductById(this.selectedProduct.Name+'');
  }

  ionViewDidLoad() {
    console.log('Hello ProductDetails Page');
  }

}
