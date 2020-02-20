import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-view-renderer-web',
  templateUrl: './view-renderer-web.component.html',
  styleUrls: ['./view-renderer-web.component.scss'],
})
export class ViewRendererWebComponent implements OnInit {

  @Input() viewData: any;

  constructor() { }

  ngOnInit() {}

}
