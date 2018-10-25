import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as UserActions from '../actions/user.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getToken(token) {
    return this.http.post('/api/auth/getToken', {token});
  }

  getDetails(token) {
    this.http.get('/api/profile', {headers: {'x-auth': token}}).subscribe(
      res => {
        console.log(res);
        const body = JSON.parse(JSON.stringify(res));
        console.log(body);
        // localStorage.setItem('x-auth', body.token);
        this.store.dispatch(new UserActions.UpdateUser({token: body.token, firstName: body.user['Student_First_Name'], lastName: body.user['Student_Last_name']}))
      }
    )
  }
}
