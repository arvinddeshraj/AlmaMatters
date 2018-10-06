import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [DashboardComponent, TopBarComponent]
})
export class DashboardModule { }
