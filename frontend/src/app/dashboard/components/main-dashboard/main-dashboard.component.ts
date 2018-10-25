import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../app.state';
import * as UserActions from '../../../actions/user.action';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  newPostForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.newPostForm = new FormGroup({
      'postContent': new FormControl(null, Validators.required)
    });
  }
  onNewPost () {
    console.log(this.newPostForm.value);
  }
  changeUser() {
    // this.store.dispatch(new UserActions.UpdateUser({name: 'Anurag Gupta', token: 'SomeShit'}) );
  }
}
