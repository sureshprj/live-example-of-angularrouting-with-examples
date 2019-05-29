import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }   from '@angular/common';
import { admin } from'./admin';
const routes =[
  {
    path:'view',
    component: admin
  },
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full'
  }
]

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations:[
    admin
  ]
})
export class adminModule{

}