import { Injectable } from '@angular/core'
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects'
import { User } from './user.reducer'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/delay'

import * as UserActions from './user.action'
import { Observable } from 'rxjs/observable'

import { FirebaseAuthServiceService } from '../services/firebase-auth-service.service'
import { Action } from '@ngrx/store'
import { mergeMap, switchMapTo, switchMap, tap } from 'rxjs/operators'
import { map } from 'rxjs/operators'
import { catchError } from 'rxjs/operators'
import { from, of } from 'rxjs'
import { ThrowStmt } from '@angular/compiler'
import { exhaustMap } from 'rxjs/operators'



@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private service: FirebaseAuthServiceService) {}

    @Effect()
    getUser$ = this.actions$.pipe(
        ofType(UserActions.userStateActions.GET_USER),
        mergeMap(() => this.service.getAuthState()
            .pipe(
                map(data => {
                    if(data) {
                        console.log('auth user',data?.displayName)

                        var tok;

                        const getIdToken = (playload: any) => {
                            playload?.getIdToken(true).then((token: any) => {
                                console.log(token)
                                return token
                            })
                        }

                        const user = {
                            name: data?.displayName,
                            email: data?.email,
                            uid: data?.uid,
                            img: data?.photoURL,
                        }
                        return new UserActions.Authenticated(user)
                    
                    }else {
                        console.log("user not authenticated")
                        return new UserActions.NotAuthenticated()
                    }
                })
            )
        ),
    );


    @Effect()
    loginUser$ = this.actions$.pipe(
        ofType(UserActions.userStateActions.CUSTOM_LOGIN_ATTEMPT),
        exhaustMap((action: UserActions.CustomLoginAttempt) => this.service.signin(action.email, action.password)
        .then((data: any) => {
            if(data) {
                console.log("login user", data.user)
                const user = {
                    name: data.user?.displayName,
                    email: data.user?.email,
                    uid: data.user?.uid,
                    img: data.user?.photoURL
                }
                return new UserActions.Authenticated(user)
            }else {
                return new UserActions.NotAuthenticated()
            }
        })
        .catch(err => {
            console.log(err)
            return new UserActions.AuthError({error: err})
        })
        )
    )

    @Effect()
    googleLoginUser$ = this.actions$.pipe(
        ofType(UserActions.userStateActions.GOOGLE_LOGIN_ATTEMPT),
        mergeMap(() => this.service.googleAuth()
            .then(() => {
                return new UserActions.GetUser()
            })
            .catch(err => {
                return new UserActions.AuthError({error: err})
            })
        )
    )

    @Effect()
    logout$ = this.actions$.pipe(
        ofType(UserActions.userStateActions.LOGOUT),
        mergeMap(() => this.service.Logout()
            .then(() => {
                return new UserActions.NotAuthenticated()
            })
        )
    )

}