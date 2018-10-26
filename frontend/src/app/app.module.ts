import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';

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
import { DirectoryModule } from './directory/directory.module';
import { ProfilePostsComponent } from './profile/pages/profile-posts/profile-posts.component';
import { CallbackComponent } from './callback/callback.component';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './directory/pages/search/search.component';
import { FormsModule } from '@angular/forms';  
import { ReactiveFormsModule } from '@angular/forms';
import { eventReducer } from './reducers/event.reducer';


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
  path: 'directory',
  component: SearchComponent
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
    StoreModule.forRoot({
      event: eventReducer,
      user: userReducer
    }),
    LandingPageModule,
    DashboardModule,
    PostsModule,
    ProfileModule,
    DirectoryModule,
    CommonComponentsModule,
    ServicesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
