import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PageLoaderService } from './page-loader.service';
import { AppigatorInitService } from './appigator-init.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PageLoaderService,
    AppigatorInitService
  ]
})
export class CoreServicesModule { }
