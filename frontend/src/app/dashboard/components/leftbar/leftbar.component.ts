import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {
  expandedPosts = true;
  expandedUnpublished = true;
  posts : any[] = [];
  unpublished = [{
    progress:0,
    heading: 'AFCAT job listing',
    content: 'Create full fledged design for AirForce website'
  }]
  constructor(private eventService: EventService, private store: Store<AppState>) { 
    store.select('events').subscribe(
      res => {console.log(res);this.posts = res}
    );
  }

  ngOnInit() {
    this.eventService.getMyEvents(localStorage.getItem('x-auth'));
    this.eventService.getMyEvent(localStorage.getItem('x-auth')).subscribe(
      res => {
        const body = JSON.parse(JSON.stringify(res));
        this.posts =[];
          for (let i of body.events) {
            i.progress = Math.floor(Math.random()*100);
            this.posts.push(i);
          }
        },
      err => console.log(err)
    );
    this.eventService.getEventsObservable().subscribe(
      res => console.log('pos',res)
    )
  }

}
