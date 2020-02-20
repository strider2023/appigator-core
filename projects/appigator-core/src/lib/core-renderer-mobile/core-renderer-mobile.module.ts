import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRendererMobileComponent } from './view-renderer-mobile/view-renderer-mobile.component';

import { CoreFieldsModule } from '../core-fields/core-fields.module';
import { CoreFieldMobileModule } from '../core-field-mobile/core-field-mobile.module';

@NgModule({
  declarations: [
    ViewRendererMobileComponent
  ],
  imports: [
    CommonModule,
    CoreFieldsModule,
    CoreFieldMobileModule
  ],
  exports: [
    ViewRendererMobileComponent
  ]
})
export class CoreRendererMobileModule { }
