import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepRendererComponent } from './step-renderer/step-renderer.component';

@NgModule({
  declarations: [
    StepRendererComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepRendererComponent
  ]
})
export class CoreRendererModule { }
