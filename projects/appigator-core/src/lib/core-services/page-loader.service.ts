import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {

  BASE_PATH = 'assets/config/';
  PAGE_BASE_PATH = 'assets/config/pages/';

  baseConfig: any;

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    this.http.get(this.BASE_PATH + 'base-config.json').subscribe((data: any) => {
      console.log(data);
      for (const key of Object.keys(data)) {
        window.localStorage.setItem(key, data[key]);
      }
    });
  }

  loadPage(pageId: string, callback: any) {
    this.http.get(this.PAGE_BASE_PATH + pageId + '.json').subscribe((data: any) => {
      callback(data);
    });
  }
}
