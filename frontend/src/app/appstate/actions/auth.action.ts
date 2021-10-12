import { Action } from '@ngrx/store'
import { AuthCheck } from 'src/app/models/Auth'

export const AUTHENTICATE_USER = '[Auth] Autheticate'

export class AuthenticateUser implements Action {
    readonly type = AUTHENTICATE_USER
    constructor() {}
}

export type All 
= AuthenticateUser