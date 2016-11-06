import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Task } from './task';
import { Taskdata } from '../../providers/taskdata';
/*
  Generated class for the Tasks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class Tasks {
allTask:Task[]=[];
title:string;
constructor(public navCtrl: NavController,private _taskData:Taskdata) {
  
}

  ionViewDidLoad() {
    console.log('Hello Tasks Page');
    this.allTask=this._taskData.getAllTask();
  }
taskSelected(t:Task){
    alert(t.Title);
}
addTodo(){
this._taskData.addTask(new Task('',this.title,'pending'));
this.title='';
}
deleteTask(t:Task){
  
  this._taskData.deleteTask(t);
}
updateTask(t:Task){
  
  if(t.Status=='done')
  {
    t.Status='pending';
  }
  else
  {
    t.Status='done';
  }
}
onInput(ev:any){
  
this.allTask=this._taskData.getAllTask();
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      
      this.allTask=this.allTask.filter((res)=>res.Title.startsWith(val));
    }
    
}
}
