import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './to-do/signup/signup.component';
import { AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {LoginComponent} from './to-do/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AddtodoComponent } from './to-do/addtodo/addtodo.component';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
AngularFireModule.initializeApp(environment.firebase),
HttpClientModule,
BrowserAnimationsModule,
ToastrModule.forRoot({
  timeOut: 10000,
    positionClass: 'toast-top-right',
    preventDuplicates: true
}),
AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
