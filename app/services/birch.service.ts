import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BirchService {
  private http: HttpClient = inject(HttpClient);
  private birchApiUrl: string = 'https://api.guangxuezhang.com/v1/hongfa/birch';

  constructor() {}

  getItemNameList(): [] {
    return [];
  }
  getBirchItems(): Observable<any> {
    return this.http.get<JSON>(`${this.birchApiUrl}/items`, {});
  }
}
