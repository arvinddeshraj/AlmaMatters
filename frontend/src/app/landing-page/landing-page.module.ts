import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
