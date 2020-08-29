import { Injectable } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  addtodo: Observable<any>;
  items: AngularFireList<any>;

  documentToDomainObject = _ => {
    const object = _.payload;
    object.id = _.payload;
    return object;
  }

  isLoggedIn = false

  constructor(public db: AngularFireDatabase,
    public firebaseAuth: AngularFireAuth) { }

  sendData(data: any) {
    this.db.list('items').push(data);
  }

  async Login(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn=true
    })

  }

  getData() {
    return this.db.list('items').snapshotChanges()
      .pipe(map(action => action
        .map(a => {
          const key = a.payload.key;
          const data = a.payload.val();
          return data;
        })));
  }

  addData(adddata: any) {
    this.db.list('addtodo').push(adddata);
  }

  viewItem() {
    return this.db.list('addtodo').snapshotChanges()
      .pipe(map(action => action
        .map(a => {
          const key = a.payload.key;
          const data = a.payload.val();
          return data;
        })));
  }

  updateItem(Key: any) {
    //   return this.db.list('addtodo').doc(Key).set(value);
  }


  deleteItem() {
    this.documentToDomainObject = _ => {
      const object = _.payload;
      object.id = _.payload;

    }
    // const key = _.payload.key;
     // this.db.ref('/addtodo/' + key).remove();
  }




}

