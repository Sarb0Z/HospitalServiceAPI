import { Component, OnInit } from '@angular/core';
import { DoctorApiService } from 'src/app/Services/DoctorApi/doctor-api.service';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css'],
})
export class ShowDoctorComponent implements OnInit {
  doctorList: any = [];
  doctor: any;
  toggleAdd:boolean=false;
  toggleEdit:boolean=false;
  constructor(private doctorService: DoctorApiService) {}

  ngOnInit(): void {
    this.refreshDoctorList();
  }
  refreshDoctorList() {
    this.doctorService.getDoctorList().subscribe((data) => {
      this.doctorList = data;
      this.doctorList = JSON.parse(this.doctorList);
    });
  }

  AddDoctor() {
    this.doctor = {
      id: 0,
      doctor_name: '',
      title: '',
    };
    this.toggleAdd=true;
  }

  EditDoctor(item: any) {
    this.doctor = item;
    this.toggleEdit=true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.doctorService.deleteDoctor(item.id).subscribe((data) => {
        alert(data.toString());
        this.refreshDoctorList();
      });
    }
    this.toggleAdd=this.toggleEdit=false;
  }

  closeClick() {
    this.refreshDoctorList();
    this.toggleAdd=this.toggleEdit=false;

  }
}
