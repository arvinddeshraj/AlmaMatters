import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(token) {
    return this.http.get('/api/profile/', {headers: {'x-auth': token}});
  }
  getProfilePosts(token) {
    return this.http.get('/api/post/userposts',{headers: {'x-auth': token}});
  }
}
