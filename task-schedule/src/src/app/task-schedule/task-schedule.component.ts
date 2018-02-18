import { Component, OnInit,Input,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'task-schedule',
  templateUrl: './task-schedule.component.html',
  styleUrls: ['./task-schedule.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})

export class TaskScheduleComponent implements OnInit {

  constructor() { }

@Input()userlist:any;
  
  ngOnInit() {
    console.log(this.userlist);
  }
  listData: string[] = ["ganesh","gany","abc","hello","holiday","project"];
  inpData;
  error:string;
  condition: boolean=true;
  editData:boolean;
  oldData:string;
  position:number;
  errorMsg:boolean=false;
  isUnchanged:boolean=true;
  total:number=this.listData.length;
  AddData(data)
  {
    this.error="";
    this.condition=true;
    if (data != null && data.trim()!="") 
    {
      for (let i = 0; i < this.listData.length; i++) 
      {
        if (this.listData[i] == this.inpData) 
        {
          this.condition=false;
          break;
        }
      }
      if (this.condition==true){
        this.listData.push(data);
        this.total++;
      }
      else{
        this.errorMsg=true; 
        this.error=("name already exists");
      }
      this.inpData = "";
    }else{
      this.errorMsg=true; 
      this.error="enter data";
    }
  }
  remove(data) {
    let x = data;
    this.listData.splice(x, 1);
    this.total--;
  }
  /* binding(event,data){
    this.editData=true;
    this.isUnchanged=false;
    this.oldData=event.target.innerText;
    this.position=data;
  } */
  imgBinding(event,data){
    console.log(event+" "+data);
    console.log(this.listData[data]);
    this.editData=true;
    this.isUnchanged=false;
    this.oldData=this.listData[data];
    this.position=data;
    this.errorMsg=false; 
    console.log(this.editData+" "+this.oldData+" "+this.position);
  }
  newData(data){
    if (data != null && data.trim()!="") {
    this.listData[this.position]=data;
    this.editData=false;
    this.errorMsg=false; 
    this.isUnchanged=true;
    }else{
      this.error="Please enter Data";
      this.errorMsg=true; 
    }
  }
  closing(){
    this.editData=false;
    this.errorMsg=false; 
  }
}