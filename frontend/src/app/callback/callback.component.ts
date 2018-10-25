import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as UserActions from '../actions/user.action';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  token = ''
  constructor(private route: ActivatedRoute, private authService: AuthService, private store: Store<AppState>, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.token = params['token'];
      this.authService.getToken(this.token).subscribe(
        res => {
          console.log(res);
          const body = JSON.parse(JSON.stringify(res));
          this.store.dispatch(new UserActions.UpdateUser({token: body.token, firstName: body.user[0]['Student_First_Name'], lastName: body.user[0]['Student_Last_name']}))
          this.router.navigate(['/dashboard']);
        },
        err => console.log(err)
      );
    }
    );
  }
}
