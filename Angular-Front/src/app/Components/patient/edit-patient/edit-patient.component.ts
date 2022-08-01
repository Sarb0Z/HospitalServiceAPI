import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientApiService } from 'src/app/Services/PatientApi/patient-api.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
})
export class EditPatientComponent implements OnInit {
  @Output('refreshPatientList') refreshPatientList: EventEmitter<any> =
    new EventEmitter();
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  @Input() patient: any;
  id: number = 0;
  patient_name: string = '';
  cnic: string = '';
  dob: Date = new Date();

  modalTitle: string = 'Edit Patient';

  constructor(private patientService: PatientApiService) {}

  ngOnInit(): void {
    this.refreshModalData();
  }

  //editing dob doesn't work properly - only name binds - test it later
  updatePatient() {
    var val = {
      id: this.patient.id,
      patient_name: this.patient_name,
      cnic: this.cnic,
      dob: this.dob,
    };
    this.patientService.updatePatient(val).subscribe((res) => {
      alert(res.toString());
      this.refreshPatientList.emit();
    });
  }

  refreshModalData() {
    this.id = this.patient.id;
    this.patient_name = this.patient.patient_name;
    this.cnic = this.patient.cnic;
    this.dob = this.patient.dob;
  }
}
