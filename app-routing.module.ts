import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './to-do/login/login.component';
import {AddtodoComponent} from './to-do/addtodo/addtodo.component'
import {ToDoDetailsComponent} from './to-do/to-do-details/to-do-details.component'
import {SignupComponent} from './to-do/signup/signup.component'
const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addtodo',
    component: AddtodoComponent
  },
   {
     path: 'tododetails',
    component: ToDoDetailsComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
