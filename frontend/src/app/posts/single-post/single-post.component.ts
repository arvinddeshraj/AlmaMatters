import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  @Input() singlePost : any = {
    created_at: "2018-10-25T13:44:20.000Z",
    date: "2018-10-25T13:44:20.000Z",
    desc: "This is a test post.Just to get a look at how things are",
    id: 21,
    media: null,
    roll_no: "20160010007",
    updated_at: null
  };
  constructor() { }

  ngOnInit() {
  }

}
