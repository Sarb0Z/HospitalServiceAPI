import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private logInCom = new Subject<any>();
  token: string = '';
  constructor(private http: HttpClient) {}

  /*AUTH APIS*/

  getUser(email_id: string) {
    return this.http.get(`/api/User?email_id=${email_id}`);
  }
  addUser(val: any) {
    return this.http.post('/api/User', val);
  }
  updateUser(val: any) {
    return this.http.put('/api/User', val);
  }
  getPassword(id: number) {
    return this.http.get(`/api/Password?id=${id}`);
  }
  addPassword(val: any) {
    return this.http.post('/api/Password', val);
  }
  updatePassword(val: any) {
    return this.http.put('/api/Password', val);
  }

  // verifyUser(val: any) {
  //   return this.http.put('/api/Auth', val);
  // }
  getToken(val: any) {
    return this.http.post('/api/Token', val);
  }

  getLoginStatus() {
    return this.logInCom.asObservable();
  }
  setToken(token: string) {
    this.token = token;
  }
  logout() {
    this.logInCom.next({ flag: false });
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }
  login() {
    this.logInCom.next({ flag: true });
  }
}
