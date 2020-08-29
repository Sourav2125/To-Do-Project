import { Component, OnInit } from '@angular/core';
import {TodoserviceService} from '../todoservice.service'
import {FormControl, FormGroup, Validator, Validators, PatternValidator} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
showData=[];
isLoggedIn= false
  constructor(private todoservice:TodoserviceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  loginform=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  })

  get email(){
    return this.loginform.get('email');
  }
  get password(){
    return this.loginform.get('password');
  }
  
  
  async  login(){
    const {email, password}= this.loginform.value
     await  this.todoservice.Login( email , password)
     if(this.todoservice.isLoggedIn)
            this.isLoggedIn=true
         this.toastr.success("Heyy, You Logged In Successfully!")
         this.loginform.reset()
         
  }

}
