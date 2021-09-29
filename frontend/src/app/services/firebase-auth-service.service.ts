import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Auth } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthServiceService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  signin(authData: Auth) {
    this.angularFireAuth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  signup(authData: Auth) {
    this.angularFireAuth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


}
