import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

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
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.refreshDoctorList();
  }
  refreshDoctorList() {
    this.sharedService.getDoctorList().subscribe((data) => {
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
      this.sharedService.deleteDoctor(item.id).subscribe((data) => {
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
