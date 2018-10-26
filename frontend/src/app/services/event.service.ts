import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  createEvent(eventHeader, eventContent, startDate, endDate, token) {
    return this.http.post('/api/event/create', {event_tit: eventHeader, description: eventContent, st_date: startDate, end_date: endDate}, {headers: {'x-auth': token}});
  } 
  getMyEvents(token) {
    return this.http.get('/api/event/getMyEvents', {headers: {'x-auth': token}});
  }
}
