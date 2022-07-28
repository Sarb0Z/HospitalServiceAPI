import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Services/shared.service';

import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  patientDetails: any;
  patientData: any;
  prescriptionData: any;

  toggleEdit: boolean = false;
  toggleAdd: boolean = false;

  patient: Patient[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {}

  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      cnic: '',
    });
  }

  saveChanges() {
    this.patient = [];

    this.getPatientListByNameOrCnic(this.form.value.name, this.form.value.cnic);
    if (this.patientData) {
      for (const key in this.patientData) {
        this.getPatientDetails(this.patientData[key].id);

        let curPatient: Patient = {
          id: this.patientData[key].id,
          detailsID: this.patientDetails[0].details_id,
          patient_name: this.patientData[key].patient_name,
          cnic: this.patientData[key].cnic,
          dob: this.patientData[key].dob,
          blood_type: this.patientDetails[0].blood_type,
          bone_density: this.patientDetails[0].bone_density,
        };

        this.patient.push(curPatient);
      }
    }
  }

  closeClick() {
    this.toggleAdd = this.toggleEdit = false;
    this.saveChanges();
  }

  editDetails() {
    this.toggleEdit = true;
  }
  addDetails() {
    this.toggleAdd = true;
  }
  getPrescription(cnic: string) {
    this.sharedService.getPrescription(cnic).subscribe((data) => {
      this.prescriptionData = data;
      this.prescriptionData = JSON.parse(this.prescriptionData);
      console.log(this.prescriptionData);
    });
  }
  getPatientDetails(id: number) {
    this.sharedService.getPatientDetails(id).subscribe((data) => {
      this.patientDetails = data;
      this.patientDetails = JSON.parse(this.patientDetails);
      console.log(id);
      console.log(this.patientDetails);
    });
  }
  getPatientListByNameOrCnic(name: string, cnic: string) {
    this.sharedService.getPatientByNameOrCnic(name, cnic).subscribe((data) => {
      this.patientData = data;
      this.patientData = JSON.parse(this.patientData);
    });
  }

  columnsToDisplay = ['name', 'dob', 'cnic', 'action1', 'action2'];
}
