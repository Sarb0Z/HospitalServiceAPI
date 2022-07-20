import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {
  patientList: any = [];
  modalTitle: any;
  activateAddEditPatientCom: boolean = false;
  patient: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshPatientList();
  }
  refreshPatientList() {
    this.sharedService.getPatientList().subscribe(data => {
      this.patientList = data;
      this.patientList = JSON.parse(this.patientList);
      
    });
  }

  AddPatient() {
    this.patient = {
      id: 0,
      patient_name: "",
      cnic: "",
      dob: new Date()
    }
    this.modalTitle = "Add Patient";
    this.activateAddEditPatientCom = true;
  }

  EditPatient(item: any) {
    this.patient = item;
    this.activateAddEditPatientCom = true;
    this.modalTitle = "Update Doctor";
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.sharedService.deleteDoctor(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshPatientList();
      })
    }
  }

  closeClick() {
    this.activateAddEditPatientCom = false;
    this.refreshPatientList();
  }

}
