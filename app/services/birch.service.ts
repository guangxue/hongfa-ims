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

  getItemNameList(): Observable<any> {
    return this.http.get<JSON>(`${this.birchApiUrl}/items/item-name`, {});
  }
  getBirchItems(): Observable<any> {
    return this.http.get<JSON>(`${this.birchApiUrl}/items`, {});
  }

  /**
   *
   * @param namesBody
   * An array of itemNames that send as post body
   */
  getBirchItemCodesByNames(namesBody: string[]): Observable<any> {
    console.log("Making Post Request.....with data:", namesBody)
    return this.http.post(`${this.birchApiUrl}/items/item-codes`, JSON.stringify(namesBody), {});
  }
}
