import { Component } from '@angular/core';
import { NavController ,LoadingController ,ToastController } from 'ionic-angular';
import { Dbtaskservice } from '../../providers/dbtaskservice';
import { Task } from '../tasks/task';
/*
  Generated class for the Taskdb page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-taskdb',
  templateUrl: 'taskdb.html'
})
export class Taskdb {
allTask:Task[]=[];
title:string;
id:string;
  constructor(public navCtrl: NavController,public loadincontroller:LoadingController,public _dbtaskservice:Dbtaskservice
  ,public _toast:ToastController){

  }

  ionViewDidLoad() {
    console.log('Hello Taskdb Page');
    let loadingdata=this.loadincontroller.create({
      content:"Loading Tasks..."
    });
    loadingdata.present();
    this._dbtaskservice.getAllTask().subscribe(
      (data:Task[])=>{
        this.allTask=data;
        console.log(data);
      },
      function (error){
        console.log("error"+error)
      },
      function(){
        console.log("subscription done")
        loadingdata.dismiss();
      }
    );
  }
addTask(){
  let loadingdata=this.loadincontroller.create({
      content:"Posting Tasks..."
    });
    loadingdata.present();
this._dbtaskservice.addTask(new Task(this.id,this.title,'pending'))
.subscribe(
  (data:Task)=>{
    if(data!=null){
      this.allTask.push(new Task(this.id,this.title,'pending'));
      this.title='';
      this.id='';
    }
  },
  function(error){},
  function(){
    loadingdata.dismiss();
  }

);
}
updateTask(t:Task){
  if(t.Status=='done')
  {
    t.Status='pending';
  }
  else
  {
    t.Status='done'
  }
  this._dbtaskservice.editTask(t).subscribe(
    (data:any)=>{

      if(data.affectedRows==1)
      {
        let mes=this._toast.create({
        message:'Task Updated Successfully',
        duration:2000,
        position:'bottom'
        });
        
        mes.present();
      }
      else
      {
        let mes=this._toast.create({
        message:'Error in Updating',
        duration:2000,
        position:'bottom'
        });
        
        mes.present();
      }
    }
  );
}
deleteTask(t:Task){
  
  this._dbtaskservice.deleteTask(t).subscribe(
    (data:any)=>{

      if(data.affectedRows==1){
        
        let mes=this._toast.create({
        message:'Task Deleted Successfully',
        duration:2000,
        position:'bottom'
        });
        this.allTask.splice(this.allTask.indexOf(t),1);
        mes.present();
      }
      else{
        let mes=this._toast.create({
        message:'Error in deleting task',
        duration:2000,
        position:'bottom'
        });
        mes.present();
      }
    }
  );
}
}
