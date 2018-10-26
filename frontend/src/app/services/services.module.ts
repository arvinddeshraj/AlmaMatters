import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { PostsService } from './posts.service';
import { EventService } from './event.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthService, PostsService, EventService]
})
export class ServicesModule { }
