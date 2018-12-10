import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor(private eventService: EventService) { }
  events = [];
  length = 100;
  pageSize = 12;
  pageSizeOptions: number[] = [12];
  pageIndex = 0;
  // MatPaginator Output
  pageEvent: PageEvent;
  ngOnInit() {
    this.eventService.getAllEvents(localStorage.getItem('x-auth'), 0 , 12).subscribe(
      res => {
        const body = JSON.parse(JSON.stringify(res));
        this.events = [];
        for (const i of body) {
          i.progress = Math.floor(Math.random() * 100);
          this.events.push(i);
        }
        console.log(this.events);
      },
      err => console.log(err)
    );
  }
  getEvents (a, b) {
    this.eventService.getAllEvents(localStorage.getItem('x-auth'), a, b).subscribe(
      res => {
        const body = JSON.parse(JSON.stringify(res));
        this.events = [];
        for (const i of body) {
          i.progress = Math.floor(Math.random() * 100);
          this.events.push(i);
        }
        console.log(this.events);
      },
      err => console.log(err)
    );
  }
  pagechanged(event) {
    console.log(event)
    this.pageIndex = event.pageIndex;
    this.getEvents(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }
}
