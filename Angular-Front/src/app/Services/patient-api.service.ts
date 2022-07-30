import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  constructor(private http: HttpClient) {}

  /*PATIENT APIS */
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
  getPatientDetails(id: number): Observable<any[]> {
    return this.http.get<any>(`/api/PatientDetails?id=${id}`);
  }
  getPatient(id: number) {
    return this.http.get('/api/Patient/GetById/' + id);
  }
  getPatientByNameOrCnic(name: string, cnic: string) {
    if (name==''){
      name="\'\'";
    }
    if (cnic==''){
      cnic="\'\'";
    }
    return this.http.get(`/api/Patient/GetByName?name=${name}&cnic=${cnic}`);
  }
  addPatientDetails(val: any) {
    return this.http.post('/api/PatientDetails', val);
  }
  updatePatientDetails(val: any) {
    return this.http.put('/api/PatientDetails', val);
  }
  deletePatientDetails(id: any) {
    return this.http.delete('/api/PatientDetails/' + id);
  }
  getPatientDiagnosis(cnic: string): Observable<any> {
    return this.http.get<any>(`/api/PatientDiagnosis?cnic=${cnic}`);
  }

}
