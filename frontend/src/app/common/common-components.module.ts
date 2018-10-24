import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  exports: [
    TopBarComponent
  ],
  declarations: [TopBarComponent]
})
export class CommonComponentsModule { }
