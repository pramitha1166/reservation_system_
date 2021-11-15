import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { FirebaseAuthServiceService } from '../services/firebase-auth-service.service'
import * as UserActions from '../user_state/user.action'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any ;
  constructor(private store: Store<any>, private service: FirebaseAuthServiceService) { }

  ngOnInit(): void {
    //this.store.dispatch({type: "GOOGLE_LOGIN_ATTEMPT"});
    this.store.dispatch(new UserActions.GetUser())
    this.store.subscribe(state => {
      console.log(state)
      
    })
    this.service.getAuthState()
    .pipe(data => data)
    .subscribe(res => {
      //console.log('Auth state',res)
    })
  }

}
