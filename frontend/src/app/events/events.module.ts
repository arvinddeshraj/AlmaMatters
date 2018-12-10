import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './pages/events-list/events-list.component';
import { SingleEventComponent } from './components/single-event/single-event.component';
import { MatCardModule, MatButtonModule, MatPaginatorModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [EventsListComponent, SingleEventComponent]
})
export class EventsModule { }
