import * as AuthActions from '../actions/auth.action'
import { AuthCheck } from 'src/app/models/Auth'
import { State } from '@ngrx/store'

export type Action = AuthActions.All

const defaultState: AuthCheck = {
    isLoggedIn: false
}

const newState = (state : AuthCheck, newData : AuthCheck) => {
    return Object.assign({}, state, newData)
}

export function authReducer(state: AuthCheck = defaultState, action: Action) {
    switch(action.type) {
        case AuthActions.AUTHENTICATE_USER:
            return newState(state, {isLoggedIn: true});
        default: 
            return state
    }
}