import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  //readonly APIUrl = 'https://localhost:5000/api';
  constructor(private http: HttpClient) { }

  getPatientList(): Observable<any[]> {
    return this.http.get<any>('/api/Patient');
  }
  addPatient(val: any) {
    return this.http.post('/api/Patient', val);
  }
  updatePatient(val: any) {
    return this.http.put('/api/Patient', val);
  }
  deletePatient(id: any) {
    return this.http.delete('/api/Patient/' + id);
  }
  getDoctorList(): Observable<any[]> {
    return this.http.get<any>('/api/Doctor');
  }
  addDoctor(val: any) {
    return this.http.post('/api/Doctor', val);
  }
  updateDoctor(val: any) {
    return this.http.put('/api/Doctor', val);
  }
  deleteDoctor(id: any) {
    return this.http.delete('/api/Doctor/' + id);
  }
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

  getReceipt(id:any){
    return this.http.get('api/Receipt/' + id);
  }
}
