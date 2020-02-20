import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {

  BASE_PATH = 'assets/config/';

  constructor(private http: HttpClient) {

  }

  init() {
    this.http.get(this.BASE_PATH + 'base-config.json').subscribe((data: any) => {
      console.log(data);
      // for (const singleRes of data) {
      //   window.localStorage.setItem(singleRes, data[singleRes]);
      // }
    });
  }

  loadPage(pageId: string, callback: any) {
    console.log(pageId);
    this.http.get(this.BASE_PATH + pageId + '.json').subscribe((data: any) => {
      callback(data);
    });
  }
}
