import { Component, OnInit } from '@angular/core';
import {faAdjust, faArrowsAlt} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../appstate/actions/auth.action'
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { AuthCheck } from 'src/app/models/Auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faAdjust = faAdjust;
  faArrowsAlt = faArrowsAlt;
  isLoggedIn = false;

  auth: Observable<AuthCheck>;

  constructor(private router: Router, private store: Store<AppState>) { 
    this.auth = this.store.select('auth')
    console.log(this.auth)
  }

  ngOnInit(): void {
    this.store.dispatch(new AuthActions.AuthenticateUser())
    this.auth?.subscribe(res => {
      console.log(res)
    })
  }

  routeToLoginPage() {
    this.router.navigate(["login"])
  }

}
