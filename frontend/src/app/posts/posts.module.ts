import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { PostComponent } from './pages/post/post.component';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SinglePostComponent } from './single-post/single-post.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [PostComponent, SinglePostComponent]
})
export class PostsModule { }
