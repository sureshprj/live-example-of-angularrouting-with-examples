import { Component,Input,Output,ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
  <h1>Navigation</h1>
  <nav>
    <a routerLink="/user" routerLinkActive="myCls">User</a>
    <a routerLink="/admin" routerLinkActive="myCls">Admin</a>
    <a  routerLink="/main" routerLinkActive="myCls">home</a>
    <a [routerLink]="[{ outlets :{ commonOutlet: ['showdata'] }}]"> Show Mssg</a>
  </nav>
  <router-outlet></router-outlet>
  <router-outlet name="commonOutlet"></router-outlet>
`,
styles:[`
  .myCls{
    color:blue
  }
`]
})
export class AppComponent  {
}
