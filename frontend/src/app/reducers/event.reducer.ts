import { Action } from '@ngrx/store'
import { Event } from '../models/event.model';
import * as EventActions from '../actions/event.action';

export function eventReducer(state: Event[] = [], action: EventActions.Actions) {
    switch(action.type) {
        case EventActions.Update_Events:
            {
                console.log('here',action.payload);
                return action.payload;
            }
        default:
            return state;
    }
}