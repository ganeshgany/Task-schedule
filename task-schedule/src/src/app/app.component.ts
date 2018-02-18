import { Component} from '@angular/core';

import { Hero } from './hero';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls:['app.component.css']
})

export class AppComponent {
  title='Event Manager'
    mylist:string[] = ["ganesh","gany","abc","hello","holiday","project"];
  event:string;
  ngOnInit(){}
  addEvent(){
    alert('clicked');
    /* var li=document.createElement('li');
    $('#content').appendChild(li); */
    $("#content").append("<li><input type='checkbox'><li>");
 
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/