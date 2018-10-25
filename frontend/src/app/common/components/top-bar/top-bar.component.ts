import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './../../../models/user.model';
import { AppState } from './../../../app.state';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  user : User;
  constructor(private store: Store<AppState>) { 
    store.select('user').subscribe(
      user => this.user = user
    );
  }
  ngOnInit() {
  }

}
