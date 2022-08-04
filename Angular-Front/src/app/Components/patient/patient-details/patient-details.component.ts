import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PatientApiService } from 'src/app/Services/PatientApi/patient-api.service';
import { PrescriptionApiService } from 'src/app/Services/PrescriptionApi/prescription-api.service';

import { Component, OnInit } from '@angular/core';
import { PatientFull } from '../../../Interfaces/patientFull';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  patientDetails: any;
  patientData: any;
  prescriptionData: any;

  patient: PatientFull[] = [];
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    cnic: new FormControl(''),
  });

  toggleTable: boolean = false;
  dataSource:any;


  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientApiService,
    private prescriptionService: PrescriptionApiService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.maxLength(40)],
      cnic: ['', Validators.maxLength(15)],
    });

    this.initChanges();
  }
  onClick() {
    this.toggleTable = true;
    if (this.form.value.cnic != '' || this.form.value.name != '') {
      this.saveChanges();
    } else {
      this.initChanges();
    }
  }
  initChanges() {
    this.patientService.getPatientList().subscribe((data) => {
      this.patientData = data;
      this.patientData = JSON.parse(this.patientData);
      if (this.patientData) {
        for (const key in this.patientData) {
          this.getPatientDetails(this.patientData[key].id);
          let curPatient: PatientFull = {
            id: this.patientData[key].id,
            detailsID: this.patientDetails
              ? this.patientDetails[0].details_id
              : null,
            patient_name: this.patientData[key].patient_name,
            cnic: this.patientData[key].cnic,
            dob: this.patientData[key].dob,
            blood_type: this.patientDetails
              ? this.patientDetails[0].blood_type
              : null,
            bone_density: this.patientDetails
              ? this.patientDetails[0].bone_density
              : null,
          };

          this.patient.push(curPatient);
        }
        this.dataSource = new MatTableDataSource(this.patient);

      }
    });
    
  }

  saveChanges() {
    this.patient = [];

    this.getPatientListByNameOrCnic(this.form.value.name, this.form.value.cnic);
    if (this.patientData) {
      for (const key in this.patientData) {
        this.getPatientDetails(this.patientData[key].id);
        let curPatient: PatientFull = {
          id: this.patientData[key].id,
          detailsID: this.patientDetails
            ? this.patientDetails[0].details_id
            : null,
          patient_name: this.patientData[key].patient_name,
          cnic: this.patientData[key].cnic,
          dob: this.patientData[key].dob,
          blood_type: this.patientDetails
            ? this.patientDetails[0].blood_type
            : null,
          bone_density: this.patientDetails
            ? this.patientDetails[0].bone_density
            : null,
        };
        console.log(curPatient);

        this.patient.push(curPatient);
      }
      console.log(this.patient);
    }
  }

  closeClick() {
    this.saveChanges();
  }

  getPrescription(cnic: string) {
    this.prescriptionService.getPrescription(cnic).subscribe((data) => {
      this.prescriptionData = data;
      this.prescriptionData = JSON.parse(this.prescriptionData);
      console.log(this.prescriptionData);
    });
  }
  getPatientDetails(id: number) {
    this.patientService.getPatientDetails(id).subscribe((data) => {
      this.patientDetails = data;
      this.patientDetails = JSON.parse(this.patientDetails);
      // console.log(id);
      // console.log(this.patientDetails[0]);
    });
  }
  getPatientListByNameOrCnic(name: string, cnic: string) {
    this.patientService.getPatientByNameOrCnic(name, cnic).subscribe((data) => {
      this.patientData = data;
      this.patientData = JSON.parse(this.patientData);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  columnsToDisplay = ['name', 'dob', 'cnic', 'action1', 'action2'];
}
