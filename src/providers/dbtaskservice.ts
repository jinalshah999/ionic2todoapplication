import { Injectable } from '@angular/core';
import { Task } from '../pages/tasks/task';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import  'rxjs/Rx';


/*
  Generated class for the Dbtaskservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Dbtaskservice {
private allTask:Task[]=[];
private url:string="https://rkdemotask.herokuapp.com/Tasks/";
  constructor(public _http: Http) 
  {
    console.log('Hello Dbtaskservice Provider');
  }
  getAllTask()
 {
  return this._http.get(this.url)
  .map((response:Response)=>response.json());
  
  }
  deleteTask(item:Task){
        
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this._http.delete(this.url+item.Id,
                      options)
                    .map((response:Response)=>response.json());   
  }
  addTask(item:Task){
       let body = JSON.stringify(item);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       return this._http.post(this.url,
                     body, options)
                    .map((response:Response)=>response.json());
  }
  getTaskId(id:any){
    return this._http.get(this.url+id)
  .map((response:Response)=>response.json());
  }
  editTask(item:Task){
       let body = JSON.stringify(item);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       return this._http.put(this.url+item.Id,
                     body, options)
                    .map((response:Response)=>response.json());
  }
 
}
