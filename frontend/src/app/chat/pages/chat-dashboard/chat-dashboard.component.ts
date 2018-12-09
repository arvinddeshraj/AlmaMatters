import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.scss']
})
export class ChatDashboardComponent implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit() {
  }

}
