import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.scss']
})
export class ProfileComponentComponent implements OnInit {

  constructor(private prifileService : ProfileService) { }

  name = '';
  email = '';
  roll_no = '';

  ngOnInit() {
    this.prifileService.getProfile(localStorage.getItem('x-auth')).subscribe(
      res => {
        const body = JSON.parse(JSON.stringify(res));
        console.log(body)
        this.name = body.user.Student_First_Name+' '+body.user.Student_Last_name
        this.roll_no = body.user.Student_ID
      },
      err => console.log(err)
    );

  }

}
