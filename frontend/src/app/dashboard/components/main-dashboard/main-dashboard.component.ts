import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './../../../models/user.model';
import { AppState } from './../../../app.state';
import * as UserActions from '../../../actions/user.action';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  changeUser() {
    this.store.dispatch(new UserActions.UpdateUser({name: 'Anurag Gupta', token: 'SomeShit'}) );
  }
}
