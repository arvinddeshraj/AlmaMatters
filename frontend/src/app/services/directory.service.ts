import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private http: HttpClient) { }
  getAll(token) {
    return this.http.post('https://serene-wildwood-35121.herokuapp.com/query',{query : `SELECT * from Student`},{headers: {'x-auth': token}});
  }
}
