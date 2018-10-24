import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from './../models/user.model';

export const Update_User = 'Update User';
export const Update_Token = 'Update Token'

export class UpdateUser implements Action {
    readonly type = Update_User;

    constructor (public payload: User) {}
}

export class UpdateToken implements Action {
    readonly type = Update_Token;

    constructor (public payload: string) {}
}

export type Actions = UpdateUser | UpdateToken;
