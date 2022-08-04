import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  logInCom:boolean=false;
  constructor(private http: HttpClient) {}
  /*AUTH APIS*/
  addUser(val: any) {
    return this.http.post('/api/Auth', val);
  }
  verifyUser(val: any) {
    return this.http.put('/api/Auth', val);
  }
  login(){
    this.logInCom=true;
  }
}
