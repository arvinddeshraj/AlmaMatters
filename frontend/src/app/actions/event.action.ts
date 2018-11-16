import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Event } from './../models/event.model';

export const Update_Events = 'Update Events';

export class UpdateEvents implements Action {
    readonly type = Update_Events;

    constructor (public payload: Event[]) {}
}


export type Actions = UpdateEvents;
