import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss']
})
export class ProfilePostsComponent implements OnInit {

  constructor(private profileService : ProfileService, private postService : PostsService) { }
  posts = []
  User = ""
  ngOnInit() {
    this.profileService.getProfilePosts(localStorage.getItem('x-auth')).subscribe(
      (res) => {
        console.log(res);
        this.posts = JSON.parse(JSON.stringify(res)).userPosts;
        this.User = this.posts[0].first_name;
      },
      err => console.log(err)
    )
  }
  delete(ID) {
    this.postService.delPost(ID,localStorage.getItem('x-auth')).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
