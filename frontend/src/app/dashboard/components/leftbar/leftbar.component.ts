import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {
  posts = [{
    progress: 70,
    heading: 'Opening for deno devs',
    content: 'Contributors for deno can join me as freelancer for four months'
  }, {
    progress: 30,
    heading: 'Opening for deno devs',
    content: 'Contributors for deno can join me as freelancer for four months'
  }];
  unpublished = [{
    progress:0,
    heading: 'AFCAT job listing',
    content: 'Create full fledged design for AirForce website'
  }]
  constructor() { }

  ngOnInit() {
  }

}
