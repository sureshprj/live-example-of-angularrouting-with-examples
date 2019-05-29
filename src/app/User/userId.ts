import { Component,Input,Output,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector:'user',
  template:`<h4>User Module</h4>
    userID is {{id}}

  `
})
export class userID{
  private id:any = 0;
  constructor( private route: ActivatedRoute,
    private router: Router){

      this.route.paramMap.subscribe((params)=>{
        this.id = params.get("id"); console.log(params.get("id"))
      })
      
      this.route.data.subscribe((d)=>{
        console.log(d);
      })

      this.id = this.route.snapshot.paramMap.get('id')
    }
}