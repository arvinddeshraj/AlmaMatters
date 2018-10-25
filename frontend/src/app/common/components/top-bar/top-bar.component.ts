import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './../../../models/user.model';
import { AppState } from './../../../app.state';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  user : User;
  constructor(private store: Store<AppState>, private authService: AuthService, private router: Router) { 
    store.select('user').subscribe(
      user => this.user = user
    );
  }
  ngOnInit() {
    if (localStorage['x-auth']){
      console.log(localStorage['x-auth']);
      this.authService.getDetails(localStorage['x-auth']);
    } else {
      this.router.navigate(['/']);
    }
  }

}
