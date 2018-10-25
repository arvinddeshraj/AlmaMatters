import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss']
})
export class ProfilePostsComponent implements OnInit {

  constructor(private profileService : ProfileService) { }
  posts = []
  User = ""
  ngOnInit() {
    this.profileService.getProfilePosts(localStorage.getItem('x-auth')).subscribe(
      res => {
        console.log(res);
        this.posts = JSON.parse(JSON.stringify(res));
        this.User = this.posts[0].first_name;
      },
      err => console.log(err)
    )
  }

}
