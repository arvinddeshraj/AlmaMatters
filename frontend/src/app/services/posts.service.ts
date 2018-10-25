import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  createPost(postcontent, token) {
    console.log(postcontent)
    return this.http.post('/api/post/add', {description: postcontent}, {headers: {'x-auth': token}});
  }
  getPosts(starting, ending, token) {
    return this.http.get('/api/post/get?initialPostNumber='+starting+'&finalPostNumber='+ending, {headers: {'x-auth': token}});
  }
}
