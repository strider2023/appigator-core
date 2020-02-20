import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-section-renderer',
  templateUrl: './section-renderer.component.html',
  styleUrls: ['./section-renderer.component.scss'],
})
export class SectionRendererComponent implements OnInit {

  @Input() sectionData: any;
  platformType: string;

  constructor() { }

  ngOnInit() {
    this.platformType = window.localStorage.getItem('platform');
  }

}
