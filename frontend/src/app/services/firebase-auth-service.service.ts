import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';
import { Auth, AuthUser } from '../models/Auth';
import auth from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthServiceService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(email: string, password: string) {
   
    return new Promise((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(email,password)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
    //return this.angularFireAuth.signInWithEmailAndPassword(email,password)
  }

  signin(email: string, password: string) {

    var authUser: AuthUser = {
      email: '',
      phoneNumber: '',
      photoURL: '',
      uid: '',
      emailVerified: false
    }


    return new Promise((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(email,password)
      .then(res => {
        //console.log(res)
        resolve(res)
        var user = res.user
        authUser = {
          email: user?.email,
          phoneNumber: user?.phoneNumber,
          photoURL: user?.photoURL,
          uid: user?.uid,
          emailVerified: user?.emailVerified

        }
        localStorage.setItem("user", JSON.stringify(authUser));
        //console.log('token',user?.getIdToken)
        user?.getIdToken(true).then(token => {
          console.log('token',token)
          localStorage.setItem("user_token",token)
          //location.reload()
        })
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

  getAuthState() {
    return this.angularFireAuth.authState;
  }

  googleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider)
  }

  AuthLogin(provider: any) {

    return new Promise((resolve,reject) => {
      var authUser: AuthUser = {
        email: '',
        phoneNumber: '',
        photoURL: '',
        uid: '',
        emailVerified: false
      }

      this.angularFireAuth.signInWithPopup(provider)
      .then(res => {
        console.log('google auth: ',res.credential)
        var user = res.user
        authUser = {
          email: user?.email,
          phoneNumber: user?.phoneNumber,
          photoURL: user?.photoURL,
          uid: user?.uid,
          emailVerified: user?.emailVerified

        }
        localStorage.setItem("user", JSON.stringify(authUser));
        user?.getIdToken(true).then(token => {
          console.log('google token: ',token)
          localStorage.setItem("user_token",token)
        })

        resolve(res)
        
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })

    })
  }

  Logout() {
    return this.angularFireAuth.signOut()
  }


}
