import { Component, OnInit, Input } from '@angular/core';
import { PageLoaderService } from '../../core-services/page-loader.service';

@Component({
  selector: 'lib-step-renderer',
  templateUrl: './step-renderer.component.html',
  styleUrls: ['./step-renderer.component.scss'],
})
export class StepRendererComponent implements OnInit {

  @Input() pageId: string;

  constructor(private pageLoaderService: PageLoaderService) { }

  ngOnInit() {
    this.pageLoaderService.init();
  }

}
