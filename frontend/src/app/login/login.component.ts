import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../models/Auth';
import { FirebaseAuthServiceService } from '../services/firebase-auth-service.service';
import { select, Store } from '@ngrx/store';
import * as UserActions from '../user_state/user.action'
import { userState, errorInterface } from '../user_state/user.reducer'
import { Observable } from 'rxjs';
import { getError } from '../user_state/user.selector';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authUser: Auth = {
    email: '',
    password: ''
  }

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  userNotFound: boolean = false;

  error$ : Observable<errorInterface> | undefined;
  user$ : Observable<userState> | undefined


  constructor(private router: Router, private authService: FirebaseAuthServiceService, private store: Store<any>) { }



  ngOnInit(): void {
    this.store.subscribe(state => {
      console.log('STATE', state)
    })

    this.user$ = this.store.select('users')

  }

  googleAuthLogin1() {
    this.store.dispatch(new UserActions.GoogleLoginAttempt())
    this.user$?.subscribe((user) => {
      if(user.userType=="AUTHENTICATED_USER" && user.loading==false) {
        this.router.navigate([""])
      }
    })
  }


  login1() {
    this.store.dispatch(new UserActions.CustomLoginAttempt(this.authUser.email, this.authUser.password))
    this.error$ = this.store
      .pipe(
        select(getError)
      )

    this.error$.subscribe((err) => {
      console.log('Error', err)
      if(err.code === "auth/user-not-found") {
        this.userNotFound = true
        this.invalidPassword = false
        this.invalidEmail = false
      }else if(err.code === "auth/wrong-password") {
        this.userNotFound = false
        this.invalidPassword = true
        this.invalidEmail = false
      }else if(err.code === "auth/invalid-email") {
        this.userNotFound = false
        this.invalidPassword = false
        this.invalidEmail = true
      }
    })

    this.user$?.subscribe((user) => {
      if(user.userType=="AUTHENTICATED_USER") {
        this.router.navigate([""])
      }
    })

  }


  toRegisterScreen(e: any) {
    e.preventDefault()
    this.router.navigate(["register"])
  }

}
