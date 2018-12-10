import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss']
})
export class SingleEventComponent implements OnInit {
  @Input() singleEvent: any = {
    created_at: "2018-10-25T13:44:20.000Z",
    date: "2018-10-25T13:44:20.000Z",
    desc: "This is a test post.Just to get a look at how things are",
    title: "title",
    id: 21,
    media: null,
    roll_no: "20160010007",
    updated_at: null
  };

  constructor() { }

  ngOnInit() {
  }

}
