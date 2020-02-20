import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ImageComponent } from './image/image.component';
import { LabelComponent } from './label/label.component';
import { PickerComponent } from './picker/picker.component';
import { RadioComponent } from './radio/radio.component';
import { TextfieldComponent } from './textfield/textfield.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    ImageComponent,
    LabelComponent,
    PickerComponent,
    RadioComponent,
    TextfieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    ImageComponent,
    LabelComponent,
    PickerComponent,
    RadioComponent,
    TextfieldComponent
  ]
})
export class CoreFieldsModule { }
