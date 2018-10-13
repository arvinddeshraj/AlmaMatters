import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import {MatIconModule} from '@angular/material/icon';
import { LeftbarPostComponent } from './components/leftbar-post/leftbar-post.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [DashboardComponent, TopBarComponent, LeftbarComponent, LeftbarPostComponent]
})
export class DashboardModule { }
