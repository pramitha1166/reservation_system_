import { Component, OnInit } from '@angular/core';
import { Auth } from '../models/Auth';
import { Router } from '@angular/router';
import { FirebaseAuthServiceService } from '../services/firebase-auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  authUser: Auth = {
    email: '',
    password: ''
  }

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  userExist: boolean = false;
  registerSuccess: boolean = false;


  constructor(private router: Router, private authService: FirebaseAuthServiceService) { }

  ngOnInit(): void {
    
  }

  register() {
    this.authService.signup(this.authUser).then(res => {
      console.log(res)
      this.invalidEmail = false
      this.invalidPassword = false
      this.userExist = false
      this.registerSuccess = true
    }).catch(err => {
      console.log(err)
      if(err.code === "auth/email-already-in-use") {
        this.userExist = true
        this.invalidPassword = false
        this.invalidEmail = false
      }else if(err.code === "auth/wrong-password") {
        this.userExist = false
        this.invalidPassword = true
        this.invalidEmail = false
      }else if(err.code === "auth/invalid-email") {
        this.userExist = false
        this.invalidPassword = false
        this.invalidEmail = true
      }
    })
  }

  toLoginScreen(e: any) {
    e.preventDefault()
    this.router.navigate(["login"])
  }

}
