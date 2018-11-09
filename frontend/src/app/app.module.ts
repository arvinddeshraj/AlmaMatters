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
import { ProfilePostsComponent } from './profile/pages/profile-posts/profile-posts.component';
import { CallbackComponent } from './callback/callback.component';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';

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
},
{
  path: 'profile-posts',
  component: ProfilePostsComponent
},
{
  path: 'iauth/iiits/callback/:token',
  component: CallbackComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LandingPageModule,
    DashboardModule,
    PostsModule,
    ProfileModule,
    CommonComponentsModule,
    ServicesModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
