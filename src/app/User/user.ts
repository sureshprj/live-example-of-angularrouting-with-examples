import { Component,Input,Output,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector:'user',
  template:`<h4>User Module</h4>
    <nav>
          <a [routerLink]='["../userID",123]' routerLinkActive="myCls"> user1</a>
      <a  [routerLink]='["../userID",111]'  routerLinkActive="myCls"> User2 </a>
      <a  routerLink='/main' routerLinkActive="myCls"> home </a>
    </nav>

  `
})
export class user{

  constructor( private route: ActivatedRoute,
    private router: Router){

    }
    private va=true;
}