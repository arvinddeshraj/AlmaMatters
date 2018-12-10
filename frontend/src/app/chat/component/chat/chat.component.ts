import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private route: ActivatedRoute, private socket: Socket, private chatService: ChatService) { }
  student = { Student_First_Name: '',
    Student_Middle_Name: '',
    Student_Last_name: ''
  };
  msg = '';
  studentId = '';
  userId = '';
  messages = [];
  ngOnInit() {
    this.socket.on('received', (data) => {
      if (data.receiver === this.studentId) {
        this.messages.push(data);
        console.log(data);
      }
    });
    this.route.params.subscribe(params => {
      this.messages = [];
      console.log(params);
      this.studentId = params.id;
      this.chatService.getChat(localStorage.getItem('x-auth'), params.id, 0, 50).subscribe(
        res => {
          console.log(res);
          this.messages = [...JSON.parse(JSON.stringify(res)).chats, ...this.messages];
          this.student = JSON.parse(JSON.stringify(res)).details;
          this.userId = JSON.parse(JSON.stringify(res)).user['roll_no'];
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  sendMsg() {
    this.socket.emit('chat', {sender: this.userId, receiver: this.studentId, msg: this.msg}, (result) => {
      console.log(result);
    });
    this.msg = '';
  }
}
