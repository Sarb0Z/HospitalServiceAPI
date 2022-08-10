import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Interfaces/doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorApiService {
  constructor(private http: HttpClient) {}
  /*DOCTOR APIS*/

  getDoctorList(): Observable<Doctor[]> {
    return this.http.get<any>('/api/Doctor');
  }
  addDoctor(val: any) {
    return this.http.post('/api/Doctor', val);
  }
  updateDoctor(val: any) {
    return this.http.put('/api/Doctor', val);
  }
  deleteDoctor(id: number) {
    return this.http.delete('/api/Doctor/' + id);
  }
}
