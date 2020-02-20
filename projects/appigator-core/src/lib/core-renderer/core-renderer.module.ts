import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepRendererComponent } from './step-renderer/step-renderer.component';
import { SectionRendererComponent } from './section-renderer/section-renderer.component';

import { PageLoaderService } from '../core-services/page-loader.service';

import { CoreRendererMobileModule } from '../core-renderer-mobile/core-renderer-mobile.module';
import { CoreRendererWebModule } from '../core-renderer-web/core-renderer-web.module';

@NgModule({
  declarations: [
    StepRendererComponent,
    SectionRendererComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CoreRendererMobileModule,
    CoreRendererWebModule
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
