import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientApiService } from 'src/app/Services/patient-api.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css'],
})
export class EditDetailsComponent implements OnInit {
  @Input() patient: any;
  id: number = 0;
  blood_type: string = '';
  bone_density: string = '';

  modalTitle: string = 'Edit Details';

  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  constructor(private patientService: PatientApiService) {}

  ngOnInit(): void {
    this.id = this.patient.id;
    this.blood_type = this.patient.blood_type;
    this.bone_density = this.patient.bone_density;
  }
  updatePatientDetails() {
    var val = {
      details_id: this.patient.detailsID,
      patient_id: this.patient.id,
      blood_type: this.blood_type,
      bone_density: this.bone_density,
    };
    this.patientService.updatePatientDetails(val).subscribe((res) => {
      alert(res.toString());
      this.closeClick.emit();
    });
  }
}
