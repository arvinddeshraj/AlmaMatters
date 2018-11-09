import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  length = 100;
  pageSize = 12;
  pageSizeOptions: number[] = [12];
  pageIndex = 0;
  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  constructor(private postSerivce: PostsService) { }
  arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  posts = [];
  ngOnInit() {
    this.getPosts(0, 12)
  }

  getPosts (st, ed) {
    this.postSerivce.getPosts(st,ed,localStorage.getItem('x-auth')).subscribe(
      res => this.posts = JSON.parse(JSON.stringify(res)),
      err => console.log(err)
    );
  }

  pagechanged(event) {
    console.log(event)
    this.pageIndex = event.pageIndex;
    this.getPosts( this.pageIndex * this.pageSize,(this.pageIndex+1)* this.pageSize )
  }
}
