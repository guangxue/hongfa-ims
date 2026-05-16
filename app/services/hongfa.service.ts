import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEnv } from '../app.env';

@Injectable({
  providedIn: 'root',
})
export class HongfaService {
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  getBirchInventory(): Observable<any> {
    return this.http.get<JSON>(`${AppEnv.apiUrl.birch}/inventory`);
  }


  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post(`${AppEnv.apiUrl.hongfa}/login`, JSON.stringify(loginData));
  }


  addUser(username: string, email: string, role: string, password: string): Observable<any> {
    const userData = { username, email, role, password };
    return this.http.post(`${AppEnv.apiUrl.hongfa}/users/add`, JSON.stringify(userData));
  }
}
