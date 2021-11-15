import { createSelector } from '@ngrx/store'
import * as fromRoot from '../state/app-state'
import {userState} from './user.reducer'

export interface AppState extends fromRoot.AppState {
    users: userState
}

export const selectUser = (state: AppState) => state.users

export const getError = createSelector(
    selectUser,
    (users) => users.error
) 