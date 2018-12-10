import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-recent-chats',
  templateUrl: './recent-chats.component.html',
  styleUrls: ['./recent-chats.component.scss']
})
export class RecentChatsComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getRecentChats(localStorage.getItem('x-auth')).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
