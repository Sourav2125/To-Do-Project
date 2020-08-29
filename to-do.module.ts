import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';



@NgModule({
  declarations: [AddtodoComponent, ToDoDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ToDoModule { }
