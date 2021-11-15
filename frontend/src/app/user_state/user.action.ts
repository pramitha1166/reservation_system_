import { Action, createAction, props } from '@ngrx/store'
import { AuthUser } from '../models/Auth'

export enum userStateActions {
    GOOGLE_LOGIN_ATTEMPT = "[Auth] Google login attempt",
    GET_USER = "[Auth] Get User",
    AUTHENTICATED = "[Auth] Authenticated",
    NOT_AUTHENTICATED = "[Auth] Not Authenticated",
    AUTH_ERROR = "[Auth] Error",
    LOGOUT = "[Auth] Logout",
    CUSTOM_LOGIN_ATTEMPT = "[Auth] Custom login attempt"

}

// export const customLoginAttempt = createAction(
//     userStateActions.CUSTOM_LOGIN_ATTEMPT,
//     props<{email: string, password: string}>()
// )

export class CustomLoginAttempt implements Action {
    readonly type = userStateActions.CUSTOM_LOGIN_ATTEMPT
    email: string;
    password: string
    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
}

export class GoogleLoginAttempt implements Action {
    readonly type = userStateActions.GOOGLE_LOGIN_ATTEMPT
    constructor(public playload?: any) {}
}

export class GetUser implements Action {
    readonly type = userStateActions.GET_USER;
    constructor(public playload?: any) {}
}

export class NotAuthenticated implements Action {
    readonly type = userStateActions.NOT_AUTHENTICATED;
    constructor(public playload?: any) {}
}


export class Authenticated implements Action {
    readonly type = userStateActions.AUTHENTICATED;
    constructor(public playload?: any) {}
}


export class Logout implements Action {
    readonly type = userStateActions.LOGOUT;
    constructor(public playload?: any) {}
}

export class AuthError implements Action {
    readonly type = userStateActions.AUTH_ERROR;
    constructor(public playload?: any) {}
}

export type All = 
    | GetUser
    | Authenticated
    | GoogleLoginAttempt
    | NotAuthenticated