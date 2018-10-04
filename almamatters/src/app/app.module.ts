import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/pages/landing-page/landing-page.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';

const appRoutes = [{
  path: '',
  component: LandingPageComponent
},{
  path: 'dashboard',
  component: DashboardComponent
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    DashboardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
