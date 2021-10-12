export interface Auth{
    email: string,
    password: string
}

export interface AuthUser {
    email: string,
    phoneNumber: string,
    photoURL: string,
    uid: any,
    emailVerified: boolean
}

export interface IUser {
    uid: string,
    displayName: string,
    loading: boolean,
    error: string
}

export class User {
    constructor(public uid: any, public displayName: string) {}
}

export interface AuthCheck {
    isLoggedIn: boolean
}