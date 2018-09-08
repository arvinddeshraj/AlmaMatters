import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/pages/landing-page/landing-page.component';

const appRoutes = [{
  path: '',
  component: LandingPageComponent
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
