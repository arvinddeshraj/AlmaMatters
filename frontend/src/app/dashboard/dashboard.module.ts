import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import {MatIconModule} from '@angular/material/icon';
import { LeftbarPostComponent } from './components/leftbar-post/leftbar-post.component';
import { MainDashboardComponent, PostCreatedSnackComponent, EventCreatedSnackComponent } from './components/main-dashboard/main-dashboard.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule.forRoot(),
    MatSnackBarModule
  ],
  providers: [MatDatepickerModule],
  entryComponents: [PostCreatedSnackComponent, EventCreatedSnackComponent],
  declarations: [DashboardComponent, LeftbarComponent, PostCreatedSnackComponent, LeftbarPostComponent, MainDashboardComponent, EventCreatedSnackComponent]
})
export class DashboardModule { }
