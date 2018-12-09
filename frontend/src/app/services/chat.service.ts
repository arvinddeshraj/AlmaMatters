import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { start } from 'repl';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getChat (token, roll, indexStart, indexEnd) {
    return this.http.post('/api/chats/get', { roll, indexStart, indexEnd }, { headers: { 'x-auth': token } });
  }
}
