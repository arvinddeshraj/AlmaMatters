import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDashboardComponent } from './pages/chat-dashboard/chat-dashboard.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { RecentChatsComponent } from './component/recent-chats/recent-chats.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { ChatComponent } from './component/chat/chat.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



const config: SocketIoConfig = { url: 'http://10.0.48.101:3000', options: {} };

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [ChatDashboardComponent, RecentChatsComponent, ChatComponent]
})
export class ChatModule { }
