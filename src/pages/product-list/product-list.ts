import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Productdata } from '../../providers/productdata';
import { Product } from '../products/product';
import { ProductDetails } from '../product-details/product-details';
/*
  Generated class for the ProductList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html'
})
export class ProductList {

allProduct:Product[]=[];
selectedCat:string;
  constructor(public navCtrl: NavController,public navParam:NavParams,public _productdata:Productdata){
   this.selectedCat= navParam.get('item');
   this.allProduct=this._productdata.getProductByType(this.selectedCat);
  }

  ionViewDidLoad() {
    console.log('Hello ProductList Page');
    console.log(this.selectedCat);
  }
selectedProduct(p:Product){
this.navCtrl.push(ProductDetails,{item:p});
}
}
