import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRendererWebComponent } from './view-renderer-web/view-renderer-web.component';

@NgModule({
  declarations: [
    ViewRendererWebComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewRendererWebComponent
  ]
})
export class CoreRendererWebModule { }
