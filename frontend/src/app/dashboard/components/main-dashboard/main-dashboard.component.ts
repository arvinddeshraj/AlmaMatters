import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../app.state';
import * as UserActions from '../../../actions/user.action';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { DatePipe } from '@angular/common';
import { EventService } from 'src/app/services/event.service';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  newPostForm: FormGroup;
  newEventForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private store: Store<AppState>, private postService: PostsService, private eventService: EventService, public snackBar: MatSnackBar) { 
    this.minDate = Date.now().toLocaleString();
  }
  minDate = Date.now().toLocaleString();
  ngOnInit() {
    this.newPostForm = new FormGroup({
      'postContent': new FormControl(null, Validators.required)
    });
    this.newEventForm = new FormGroup({
      'eventHeader': new FormControl(null, Validators.required),
      'eventContent': new FormControl(null, Validators.required),
      'eventStartDate': new FormControl(null, Validators.required),
      'eventEndDate': new FormControl(null, Validators.required),
      'eventStartTime': new FormControl(null),
      'eventEndTime': new FormControl(null)
    });
  }
  onNewPost () {
    console.log(this.newPostForm.value);
    this.postService.createPost(this.newPostForm.value.postContent, localStorage.getItem('x-auth')).subscribe(
      res => {
        console.log(res);
        this.newPostForm.reset();
        this.openPostCreatedSnackBar();
      },
      err => console.log(err))
  }
  openPostCreatedSnackBar() {
    this.snackBar.openFromComponent(PostCreatedSnackComponent, {
      duration: 3500,
    });
  }
  openEventCreatedSnackBar() {
    this.snackBar.openFromComponent(EventCreatedSnackComponent, {
      duration: 3500,
    });
  }
  onNewEvent () {
    const startDate = (new Date(this.newEventForm.value.eventStartDate)).toISOString();
    let endDate = (new Date(this.newEventForm.value.eventEndDate)).toISOString();
    // if (startDate === endDate) +endDate + 86400;
    const header = this.newEventForm.value.eventHeader;
    const eventContent = this.newEventForm.value.eventContent;
    console.log(header, eventContent,startDate, endDate);
    this.eventService.createEvent(header, eventContent,startDate, endDate,localStorage.getItem('x-auth')).subscribe(
      res => {
        console.log(res)
        this.newEventForm.reset();
        this.openEventCreatedSnackBar();
      },
      err => console.log(err)
    );
  }
  changeUser() {
    // this.store.dispatch(new UserActions.UpdateUser({name: 'Anurag Gupta', token: 'SomeShit'}) );
  }
}

@Component({
  selector: 'post-created-csnack',
  template: '<div style="margin: 0 auto"><p>Post Created</p></div>',
  styles: [],
})
export class PostCreatedSnackComponent {}
@Component({
  selector: 'event-created-csnack',
  template: '<div style="margin: 0 auto"><p>Event Created</p></div>',
  styles: [],
})
export class EventCreatedSnackComponent {}
