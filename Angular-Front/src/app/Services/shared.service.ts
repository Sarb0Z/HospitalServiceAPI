import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  //readonly APIUrl = 'https://localhost:5000/api';
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

  /*DOCTOR APIS*/

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

  /*RECEIPT*/

  getReceipt(id: number): Observable<any[]> {
    return this.http.get<any>(`/api/Receipt?id=${id}`);
  }

  /*PRESCRIPTION APIS */

  getPrescription(cnic: string): Observable<any> {
    return this.http.get<any>(`/api/PatientPrescription?cnic=${cnic}`);
  }
  addPrescription(val: any) {
    return this.http.post('/api/Prescription', val);
  }
  updatePrescription(val: any) {
    return this.http.put('/api/Prescription', val);
  }
  deletePrescription(id: any) {
    return this.http.delete('/api/Prescription/' + id);
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
