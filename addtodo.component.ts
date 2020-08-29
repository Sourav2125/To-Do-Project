import { Component, OnInit } from '@angular/core';
import {TodoserviceService} from '../todoservice.service'
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  alert: boolean=false
  constructor(private todoservice:TodoserviceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addtodoitems =new FormGroup({
  title: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ,]*')]),
  icon: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ,]*')]),
  startdate: new FormControl('',[Validators.required]),
  enddate: new FormControl('',[Validators.required]),
  
})
 
get title(){
  return this.addtodoitems.get('title')
}
get icon(){
  return this.addtodoitems.get('icon')
}
get startdate(){
  return this.addtodoitems.get('startdate')
}
get enddate(){
  return this.addtodoitems.get('enddate')
}

  add(){
      this.todoservice.addData(this.addtodoitems.value);
      this.toastr.success("Item added succesfully !")
      this.addtodoitems.reset();
  }

}
