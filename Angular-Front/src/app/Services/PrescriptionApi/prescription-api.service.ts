import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionApiService {

  constructor(private http: HttpClient) {}
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

}
