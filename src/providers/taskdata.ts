import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Task } from '../pages/tasks/task';
/*
  Generated class for the Taskdata provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Taskdata {

allTask:Task[]=[
  new Task('1','push code to github','pending'),
  new Task('2','write email to your manager','done'),
  new Task('3','get jio sim card','done'),
  new Task('4','go to market','pending'),
  new Task('5','go for running','done')
];
  constructor(public http: Http) {
    console.log('Hello Taskdata Provider');
  }
  getAllTask(){
    return this.allTask;
  }
  deleteTask(item:Task){
    this.allTask.splice(this.allTask.indexOf(item),1);
  }
  addTask(item:Task){
    this.allTask.push(item);
  }
  updateTask(olditem:Task,newitem:Task){
    this.allTask[this.allTask.indexOf(olditem)]=newitem;
  }
  getTaskById(title:string){
    return this.allTask.filter(res=>res.Title==title);
  }
test(){
  alert("hello");
}
}
