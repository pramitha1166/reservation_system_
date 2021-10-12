import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';
import { Auth, AuthUser } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthServiceService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  signin(authData: Auth) {

    var authUser: AuthUser = {
      email: '',
      phoneNumber: '',
      photoURL: '',
      uid: '',
      emailVerified: false
    }


    return new Promise((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        console.log(res)
        resolve(res)
        var user = res.user
        console.log(user)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
   
  }

  // signInObserver(authData: Auth): Observable<AuthUser> {
  //   return this.angularFireAuth.signInWithEmailAndPassword<AuthUser>(authData.email, authData.password)
  // }

  signup(authData: Auth) {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        console.log(res)
        resolve(res)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }


}
