import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css'],
})
export class ShowPatientComponent implements OnInit {
  patientList: any = [];
  patient: any;
  toggleAdd:boolean=false;
  toggleEdit:boolean=false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.refreshPatientList();
  }
  refreshPatientList() {
    this.sharedService.getPatientList().subscribe((data) => {
      this.patientList = data;
      this.patientList = JSON.parse(this.patientList);
    });
  }

  AddPatient() {
    this.patient = {
      id: 0,
      patient_name: '',
      cnic: '',
      dob: new Date()
    };
    this.toggleAdd=true;
  }

  EditPatient(item: any) {
    this.patient = item;
    this.toggleEdit=true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.sharedService.deletePatient(item.id).subscribe((data) => {
        alert(data.toString());
        this.refreshPatientList();
      });
    }
    this.toggleAdd=this.toggleEdit=false;

  }

  closeClick() {
    this.refreshPatientList();
    this.toggleAdd=this.toggleEdit=false;

  }
  columnsToDisplay = ['id', 'patient_name', 'cnic', 'dob', 'Action1', 'Action2'];
}
