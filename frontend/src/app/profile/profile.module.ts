import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponentComponent } from './pages/profile-component/profile-component.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilePostsComponent } from './pages/profile-posts/profile-posts.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
  ],
  declarations: [ProfileComponentComponent, ProfilePostsComponent]
})
export class ProfileModule { }
