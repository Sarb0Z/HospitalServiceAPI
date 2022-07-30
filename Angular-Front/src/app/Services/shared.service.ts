import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  //readonly APIUrl = 'https://localhost:5000/api';
 
  constructor(private http: HttpClient) {}


  /*RECEIPT*/

  getReceipt(id: number): Observable<any[]> {
    return this.http.get<any>(`/api/Receipt?id=${id}`);
  }

  /*MEDICINE */

  getMedicine(): Observable<any[]> {
    return this.http.get<any>('/api/Medicine');
  }

  /*TEST */

  getTest(): Observable<any[]> {
    return this.http.get<any>('/api/Test');
  }

  /*DIAGNOSIS APIS */

  addDiagnosis(val: any) {
    return this.http.post('api/Diagnosis', val);
  }
  updateDiagnosis(val: any) {
    return this.http.put('api/Diagnosis', val);
  }
}
