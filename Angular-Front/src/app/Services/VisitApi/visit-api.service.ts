import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitApiService {

  constructor(private http: HttpClient) {}

    /*VISIT APIS*/

    getVisitList(): Observable<any[]> {
      return this.http.get<any>('/api/Visit');
    }
    addVisit(val: any) {
      return this.http.post('/api/Visit', val);
    }
    updateVisit(val: any) {
      return this.http.put('/api/Visit', val);
    }
    deleteVisit(id: any) {
      return this.http.delete('/api/Visit/' + id);
    }
    getVisitPage(): Observable<any[]> {
      return this.http.get<any>('/api/VisitPage');
    }
}
