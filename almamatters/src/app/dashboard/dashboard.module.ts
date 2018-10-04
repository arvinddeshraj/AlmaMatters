import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, TopBarComponent]
})
export class DashboardModule { }
