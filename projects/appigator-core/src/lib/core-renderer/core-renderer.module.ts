import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepRendererComponent } from './step-renderer/step-renderer.component';
import { SectionRendererComponent } from './section-renderer/section-renderer.component'

import { PageLoaderService } from '../core-services/page-loader.service';

@NgModule({
  declarations: [
    StepRendererComponent,
    SectionRendererComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepRendererComponent,
    SectionRendererComponent
  ],
  providers: [
    PageLoaderService
  ]
})
export class CoreRendererModule { }
