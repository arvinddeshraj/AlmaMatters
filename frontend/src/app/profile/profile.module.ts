import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponentComponent } from './pages/profile-component/profile-component.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilePostsComponent } from './pages/profile-posts/profile-posts.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [ProfileComponentComponent, ProfilePostsComponent]
})
export class ProfileModule { }
