import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-view-renderer-mobile',
  templateUrl: './view-renderer-mobile.component.html',
  styleUrls: ['./view-renderer-mobile.component.scss'],
})
export class ViewRendererMobileComponent implements OnInit {

  @Input() viewData: any;

  constructor() { }

  ngOnInit() {}

}
