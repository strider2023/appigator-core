import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRendererMobileComponent } from './view-renderer-mobile/view-renderer-mobile.component';

@NgModule({
  declarations: [
    ViewRendererMobileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewRendererMobileComponent
  ]
})
export class CoreRendererMobileModule { }
