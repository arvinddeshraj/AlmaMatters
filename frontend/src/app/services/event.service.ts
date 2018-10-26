import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as EventActions from '../actions/event.action';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }
  events = [];
  createEvent(eventHeader, eventContent, startDate, endDate, token) {
    return this.http.post('/api/event/create', {event_tit: eventHeader, description: eventContent, st_date: startDate, end_date: endDate}, {headers: {'x-auth': token}});
  }
  getMyEvents(token) {
    return this.http.get('/api/event/getMyEvents', {headers: {'x-auth': token}}).subscribe(
      res => {
        const body = JSON.parse(JSON.stringify(res));
        console.log(body);
        const events = [];
        for (let i of body.events) {
          i.progress = Math.floor(Math.random()*100);
          events.push(i);
        }
        console.log(events);
        this.events = events;
        this.store.dispatch(new EventActions.UpdateEvents(events));
        return this.events;
      },
      err => console.log(err)
    )
  }
  getMyEvent(token) {
    return this.http.get('/api/event/getMyEvents', {headers: {'x-auth': token}});
  }
  getEventsObservable() {
    return of(this.events);
  }
}
