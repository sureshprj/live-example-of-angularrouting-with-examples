import { Component,Input,Output,ChangeDetectorRef } from '@angular/core';
import {appService } from './app.service';
@Component({
  selector:'popup',
  template:` Common Data `
})
export class popup{
  constructor(private appSer:appService){

  }

}