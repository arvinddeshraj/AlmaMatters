import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../app.state';
import * as UserActions from '../../../actions/user.action';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  newPostForm: FormGroup;
  constructor(private store: Store<AppState>, private postService: PostsService) { }

  ngOnInit() {
    this.newPostForm = new FormGroup({
      'postContent': new FormControl(null, Validators.required)
    });
  }
  onNewPost () {
    console.log(this.newPostForm.value);
    this.postService.createPost(this.newPostForm.value.postContent, localStorage.getItem('x-auth')).subscribe(res => console.log(res), err => console.log(err));
  }
  changeUser() {
    // this.store.dispatch(new UserActions.UpdateUser({name: 'Anurag Gupta', token: 'SomeShit'}) );
  }
}
