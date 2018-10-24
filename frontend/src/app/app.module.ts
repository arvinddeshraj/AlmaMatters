import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/pages/landing-page/landing-page.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';
import { PostComponent } from './posts/pages/post/post.component';
import { PostsModule } from './posts/posts.module';
import { CommonComponentsModule } from './common/common-components.module';
import { ProfileComponentComponent } from './profile/pages/profile-component/profile-component.component';
import { ProfileModule } from './profile/profile.module';

const appRoutes = [{
  path: '',
  component: LandingPageComponent
},{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'posts',
  component: PostComponent
},
{
  path: 'profile',
  component: ProfileComponentComponent
}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LandingPageModule,
    DashboardModule,
    PostsModule,
    ProfileModule,
    CommonComponentsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
