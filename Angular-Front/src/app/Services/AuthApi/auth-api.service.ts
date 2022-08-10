import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements HttpInterceptor {
  logInCom: boolean = false;
  token: string = '';
  constructor(private http: HttpClient) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('id_token');

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken),
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }

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
  login(val: any) {
    return this.http.post('/api/Token', val);
  }

  getLoginStatus() {
    return this.logInCom;
  }
  setToken(token: string) {
    this.token = token;
  }
}
