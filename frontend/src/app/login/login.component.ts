import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../models/Auth';
import { FirebaseAuthServiceService } from '../services/firebase-auth-service.service';

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


  constructor(private router: Router, private authService: FirebaseAuthServiceService) { }



  ngOnInit(): void {
  }

  login() {


    this.authService.signin(this.authUser).then(res => {
      console.log("success",res)
      this.userNotFound = false
        this.invalidPassword = false
        this.invalidEmail = false
        this.router.navigate([""])
    }).catch(err => {
      console.log("error", err.code)
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
  }

  toRegisterScreen(e: any) {
    e.preventDefault()
    this.router.navigate(["register"])
  }

}
