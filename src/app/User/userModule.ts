import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }   from '@angular/common';
import { user } from'./user';
import { userID } from'./userId';
import { userService } from './userService'
import {Auth} from '../route.service';
const routes =[
  {
    path:'view',
    component: user,
    canActivate:[Auth]
  },
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full'
  },
  {
    path:'userID/:id',
    component:userID,
    data:{ page : "The User ID page"}
  }
]
@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[userService],
  declarations:[
    user,
    userID
  ]
})
export class userModule{
  
}