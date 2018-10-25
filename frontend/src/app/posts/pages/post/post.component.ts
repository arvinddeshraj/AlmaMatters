import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

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

  constructor() { }
  arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  posts = [];
  ngOnInit() {
    let post = [];
    for (let i = this.pageIndex * this.pageSize; i < (this.pageIndex+1)* this.pageSize; i++) {
      post.push(this.arr[i])
    }
    this.posts = post;
  }
  pagechanged(event) {
    console.log(event)
    this.pageIndex = event.pageIndex;
    let post = [];
    for (let i = this.pageIndex * this.pageSize; i < (this.pageIndex+1)* this.pageSize; i++) {
      post.push(this.arr[i])
    }
    this.posts = post;
  }
  showPost(i){
    return i >= this.pageIndex * this.pageSize && i < (this.pageIndex+1)* this.pageSize ? true : false;
  }

}
