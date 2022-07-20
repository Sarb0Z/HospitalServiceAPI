import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {
  doctorList: any = [];
  modalTitle: any;
  activateAddEditDoctorCom: boolean = false;
  doctor: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshDoctorList();
  }
  refreshDoctorList() {
    this.sharedService.getDoctorList().subscribe(data => {
      this.doctorList = data;
      this.doctorList = JSON.parse(this.doctorList);
      
    });
  }

  AddDoctor() {
    this.doctor = {
      id: 0,
      doctor_name: "",
      title: ""
    }
    this.modalTitle = "Add Doctor";
    this.activateAddEditDoctorCom = true;
  }

  EditDoctor(item: any) {
    this.doctor = item;
    this.activateAddEditDoctorCom = true;
    this.modalTitle = "Update Doctor";
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.sharedService.deleteDoctor(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshDoctorList();
      })
    }
  }

  closeClick() {
    this.activateAddEditDoctorCom = false;
    this.refreshDoctorList();
  }


}




