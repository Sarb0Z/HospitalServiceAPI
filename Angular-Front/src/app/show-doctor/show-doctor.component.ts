import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent {
  public doctors?: DoctorData[];
  constructor(http: HttpClient) {
    http.get<DoctorData[]>('/api/Doctor').subscribe(result => {
      this.doctors = result;
    }, error => console.error(error));
  }
  title = 'Angular-Front';



}
interface DoctorData {
  id: number;
  name: string;
  title: string;
}



