import { Component,Input,Output,ChangeDetectorRef } from '@angular/core';
import {appService } from './app.service';
@Component({
  selector:'main',
  template:` <h4>First page</h4> 
  <div><input type="text" [(ngModel)]="inputData"></div>
  <button (click)="add()">Add</button>`
})
export class main{
  constructor(private appSer:appService){

  }
  inputData:any;
  add(){
    this.appSer.data.push(this.inputData)
  }

}