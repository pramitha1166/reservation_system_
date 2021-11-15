import { Component, OnInit } from '@angular/core';
import {faAdjust, faArrowsAlt} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { AuthCheck, AuthUser } from 'src/app/models/Auth';
import * as UserActions from '../../user_state/user.action'
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  showDropMenu = false;


  public authUser: AuthUser = {
    email: '',
    phoneNumber: '',
    photoURL: '',
    uid: '',
    emailVerified: false
  }

  constructor(private router: Router, private store: Store<any>) {
    // this.authUser = JSON.parse(localStorage.getItem("user") || '{}')
    // console.log("auth user local",this.authUser)
    // //window.addEventListener("storage", function() {
    //   //this.location.reload()
    // //}, false)
    // if(sessionStorage.getItem("isLoggedIn")===null) {
    //   this.isLoggedIn = false
    // }else {
    //   this.isLoggedIn = true
    // } 
    

    //console.log("isLoggedin", this.isLoggedIn)
    
  }

  showDrop() {
    this.showDropMenu = !this.showDropMenu
  }

  logout() {
    localStorage.clear()

    this.showDropMenu = false

    sessionStorage.clear()

    this.store.dispatch(new UserActions.Logout())

  }

  ngOnInit(): void {
    this.store.dispatch(new UserActions.GetUser())
    this.store.select('users').subscribe(state => {
      console.log("HEADER STATE", state)
      this.authUser.email = state.email
      this.isLoggedIn = state.isLoggedIn
      this.authUser.photoURL = state.img
    })
  }

  routeToLoginPage() {
    this.router.navigate(["login"])
  }

}
