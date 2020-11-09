import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { TesttComponent } from './testt/testt.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {
    path :'',
    component:HomeComponent
  },
  {
    path :'login',
    component:LoginComponent
  },
  {
    path :'people-list',
    component:PeopleListComponent
  },
  {
    path :'register',
    component:RegisterComponent
  },
  {
    path :'test',
    component:TestComponent
  },
  {
    path:'testt',
    component:TesttComponent

  },
  {
    path:'add-user',
    component:AddUserComponent

  },
  {
    path:'update-user/:id',
    component:UpdateUserComponent

  },
  {
    path :'**',
    component:Page404Component
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
