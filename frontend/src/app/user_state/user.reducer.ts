import * as UserActions from './user.action'
import * as fromRoot from '../state/app-state'

export interface errorInterface {
    code: string;
    message: string
}

export interface userState {
    name: string;
    email: string;
    uid: string;
    token: string;
    img: string;
    userType: string;
    loaded: boolean;
    loading: boolean;
    isLoggedIn: boolean;
    error: errorInterface;
}

const initialState : userState = {
    name: '',
    email: '',
    uid: '',
    token: '',
    img: '',
    userType: 'GUEST',
    loaded: false,
    loading: false,
    isLoggedIn: false,
    error: {
        code: '',
        message: ''
    }
}

export class User {
    constructor(name: string, email: string, uid: string) {}
}

export interface AppState extends fromRoot.AppState {
    users: userState
}

export function userReducer(state = initialState, action: UserActions.GetUser | UserActions.Authenticated | UserActions.NotAuthenticated | UserActions.CustomLoginAttempt | UserActions.Logout |any ): userState {
    switch(action.type) {
        case UserActions.userStateActions.GET_USER:
            return {
                ...state,
                loading: true,
            }
        case UserActions.userStateActions.AUTHENTICATED:
            return {
                ...state,
                ...action.playload,
                loading: false,
                loaded: true,
                userType: 'AUTHENTICATED_USER',
                isLoggedIn: true
            }
        case UserActions.userStateActions.NOT_AUTHENTICATED:
            return {
                ...state,
                ...initialState,
                loading: false,
                isLoggedIn: false
            }
        case UserActions.userStateActions.CUSTOM_LOGIN_ATTEMPT:
            return {
                ...state,
                loading: true
            }
        case UserActions.userStateActions.GOOGLE_LOGIN_ATTEMPT:
            return {
                ...state,
                loading: true,
            }
        case UserActions.userStateActions.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                loading: true
            }
        case UserActions.userStateActions.AUTH_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                ...action.playload
            }
        default: {
            return state
        }
    }
}