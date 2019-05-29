import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes,PreloadingStrategy,PreloadAllModules} from '@angular/router';
import { main} from './app.main'
import {appService } from './app.service';
import { pageNotFound}  from './pageNotFound';
import { popup } from './popup';
import { Auth } from './route.service'


const routesDat=[
  {
      path:'main',
      component:main,
     
    },
    {
      path:'',
      redirectTo:'/main',
      pathMatch: 'full'
    },
    {
      path:'admin',
      loadChildren:'./Admin/adminModule#adminModule',
       data: { preload: true }
    },
    {
      path:'user',
      loadChildren:'./User/userModule#userModule',
       
    },
    {
      path:"**",
      component:pageNotFound
    },
    {
      path:"showdata",
      component:popup,
      outlet:"commonOutlet"
    }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      routesDat,
    {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [
    AppComponent,
    main,
    pageNotFound,
    popup
  ],
  providers:[appService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/