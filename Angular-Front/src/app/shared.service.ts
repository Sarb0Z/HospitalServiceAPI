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

  getReceipt(id: number): Observable<any> {
    return this.http.get<any>(`/api/Receipt?id=${id}`);
  }
  getVisitPage(): Observable<any[]> {
    return this.http.get<any>('/api/VisitPage');
  }
  getPatientDetails(id:number): Observable<any[]> {
    return this.http.get<any>(`/api/PatientDetails?id=${id}`);
  }
  getPatient(id:number) {
    return this.http.get('/api/Patient/'+id);
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
  getPrescription(cnic: string): Observable<any> {
    return this.http.get<any>(`/api/PatientPrescription?cnic=${cnic}`);
  }
  addPrescription(val:any){
    return this.http.post('/api/Prescription', val);
  }
  updatePrescription(val: any) {
    return this.http.put('/api/Prescription', val);
  }
  deletePrescription(id: any) {
    return this.http.delete('/api/Prescription/' + id);
  }
  getMedicine(): Observable<any[]> {
    return this.http.get<any>('/api/Medicine');
  }
  getTest(): Observable<any[]> {
    return this.http.get<any>('/api/Test');
  }
  addDiagnosis(val:any){
    return this.http.post('api/Diagnosis', val);
  }
  updateDiagnosis(val:any){
    return this.http.put('api/Diagnosis', val);
  }




}
