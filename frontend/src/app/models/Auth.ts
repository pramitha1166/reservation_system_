export interface Auth{
    email: string,
    password: string
}

export interface AuthUser {
    email: string | null | undefined,
    phoneNumber: string | null | undefined,
    photoURL: string | null | undefined,
    uid: any,
    emailVerified: boolean | null | undefined
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