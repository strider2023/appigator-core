import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';

@NgModule({
  declarations: [
    DateTimePickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateTimePickerComponent
  ]
})
export class CoreFieldWebModule { }
