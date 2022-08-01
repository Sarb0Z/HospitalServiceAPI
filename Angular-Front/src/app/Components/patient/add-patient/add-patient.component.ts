import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientApiService } from 'src/app/Services/PatientApi/patient-api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  @Output('refreshPatientList') refreshPatientList: EventEmitter<any> =
    new EventEmitter();
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  @Input() patient: any;
  id: number = 0;
  patient_name: string = '';
  cnic: string = '';
  dob: Date = new Date();

  constructor(private patientService: PatientApiService) {}

  ngOnInit(): void {
    this.id = this.patient.id;
    this.patient_name = this.patient.patient_name;
    this.cnic = this.patient.cnic;
    this.dob = this.patient.dob;
  }

  addPatient() {
    var val = {
      id: this.id,
      patient_name: this.patient_name,
      cnic: this.cnic,
      dob: this.dob,
    };
    this.patientService.addPatient(val).subscribe((res) => {
      alert(res.toString());
      this.refreshPatientList.emit();
    });
  }
}
