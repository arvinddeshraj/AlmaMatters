import { Action } from '@ngrx/store'
import { User } from '../models/user.model';
import * as UserActions from '../actions/user.action';
const initialUser: User = {
    name : 'Anurag Mishra',
    token: 'sometoken'
}

export function userReducer(state: User = initialUser, action: UserActions.Actions) {
    switch(action.type) {
        case UserActions.Update_User:
            return action.payload
        default:
            return state;
    }
}