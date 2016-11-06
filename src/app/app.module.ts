import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Calc } from '../pages/calc/calc';
import { Tasks } from '../pages/tasks/tasks';
import { Taskdata } from '../providers/taskdata';
import { Products } from '../pages/products/products';
import { ProductList } from '../pages/product-list/product-list';
import { ProductDetails } from '../pages/product-details/product-details';
import { Taskdb } from '../pages/taskdb/taskdb';
import { Productdata } from '../providers/productdata';
import { Dbtaskservice } from '../providers/dbtaskservice';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Calc,
    Tasks,
    Products,
    ProductList,
    ProductDetails,
    Taskdb
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Calc,
    Tasks,
    Products,
    ProductList,
    ProductDetails,
    Taskdb
  ],
  providers: [Taskdata,Productdata,Dbtaskservice]
})
export class AppModule {}
