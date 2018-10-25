import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  createPost(postcontent) {
    return this.http.post('/post/', {}, {headers: {}})
  }
}
