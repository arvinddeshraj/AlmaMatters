import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {
  expandedPosts = true;
  expandedUnpublished = true;
  posts = [];
  unpublished = [{
    progress:0,
    heading: 'AFCAT job listing',
    content: 'Create full fledged design for AirForce website'
  }]
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getMyEvents(localStorage.getItem('x-auth')).subscribe(
      res => {
        const body = JSON.parse(JSON.stringify(res));
        console.log(body);
        for (let i of body.events) {
          i.progress = Math.floor(Math.random()*100);
          this.posts.push(i);
        }
      },
      err => console.log(err)
    )
  }

}
