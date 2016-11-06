import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Product } from '../pages/products/product';

/*
  Generated class for the Productdata provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Productdata {
allProduct:Product[]=[

  new Product(1,'Omega',100000,'http://www.thatshouldbemine.com/wp-content/uploads/2012/11/Omega-Seamaster-Skyfall-1.jpg','life time','sample text sample text sample text sample text sample text','watch'),
  new Product(2,'Fossil',10000,'https://images-eu.ssl-images-amazon.com/images/I/71RD2qYzo9L._AA400_.jpg','3 Years','sample text sample text sample text sample text sample text','watch'),
  new Product(3,'TheHorse',20000,'https://imgau1.surfstitch.com/product_images/STO123-A15BKWHW-THEHORSE-1.JPG','5 Years','sample text sample text sample text sample text sample text','watch'),
  new Product(4,'Timex',4000,'http://ak1.ostkcdn.com/images/products/5142868/Timex-Mens-T20041-Easy-Reader-Brown-Leather-Strap-Watch-L12987455.jpg','1 year','sample text sample text sample text sample text sample text','watch')
];
  constructor(public http: Http) {
    console.log('Hello Productdata Provider');
  }
 getAllProduct(){
    return this.allProduct;
  }
  deleteProduct(item:Product){
    this.allProduct.splice(this.allProduct.indexOf(item),1);
  }
  addProduct(item:Product){
    this.allProduct.push(item);
  }
  updateProduct(olditem:Product,newitem:Product){
    this.allProduct[this.allProduct.indexOf(olditem)]=newitem;
  }
  getProductById(title:string){
    return this.allProduct.filter(res=>res.Name==title);
  }
  getProductByType(title:string){
    return this.allProduct.filter(res=>res.type==title);
  }
}
