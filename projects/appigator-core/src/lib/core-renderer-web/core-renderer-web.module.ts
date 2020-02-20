import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRendererWebComponent } from './view-renderer-web/view-renderer-web.component';

import { CoreFieldsModule } from '../core-fields/core-fields.module';
import { CoreFieldWebModule } from '../core-field-web/core-field-web.module';

@NgModule({
  declarations: [
    ViewRendererWebComponent
  ],
  imports: [
    CommonModule,
    CoreFieldsModule,
    CoreFieldWebModule
  ],
  exports: [
    ViewRendererWebComponent
  ]
})
export class CoreRendererWebModule { }
