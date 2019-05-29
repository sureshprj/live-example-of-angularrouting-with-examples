import { Component,Input,Output,ChangeDetectorRef } from '@angular/core';
import {appService } from '../app.service';
@Component({
  selector:'admin',
  template:`<h4>Am from admin Module</h4>
  <div *ngFor="let name of appSer.data">{{name}}</div>
  `
})
export class admin{
  constructor(private appSer:appService){
    this.appSer.data.push("admin Added data")
  }
}