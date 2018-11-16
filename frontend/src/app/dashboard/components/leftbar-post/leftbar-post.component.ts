import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-leftbar-post',
  templateUrl: './leftbar-post.component.html',
  styleUrls: ['./leftbar-post.component.scss']
})
export class LeftbarPostComponent implements OnInit {
  progress = 0;
  heading = '';
  content = '';
  constructor() { }
  @Input() post: any = {
    progress:0,
    heading: '',
    content: ''
  }; 
  @Input() show: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.progress = this.post.progress;
      this.heading = this.post.event_title;
      this.content = this.post.event_desc;
    }, 200)
  }

}
