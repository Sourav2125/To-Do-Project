import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { Observable, observable } from 'rxjs';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {
showData=[];
viewdata:boolean=false
key: Observable<any>
  constructor(private db:AngularFireDatabase,
    private todoservice: TodoserviceService) { }

  ngOnInit(): void {
  }

  view(){
    this.todoservice.viewItem().subscribe((data => {
     console.log("data",data)
       this.viewdata=true
        this.showData=data

     }))
  }

  updateItem(){

  }

  deleteitem(key){
          this.todoservice.deleteItem()
          
  }



}
