import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  @Input() patient:any;
  @Input() visitID:number = 0;
  patientDetail: any = this.form.group({
    blood_type: '',
    bone_density: 0,
  })

  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  constructor(private service:SharedService, private form:FormBuilder) { 
    
  }

  ngOnInit(): void {
    console.log(this.patient);
  }
  updatePatientDetails(){
    var val = {
      details_id:this.visitID,
      patient_id: this.patient.id,
      blood_type: this.patientDetail.value.blood_type,
      bone_density: this.patientDetail.value.bone_density,
    };
    console.log(val);
    this.service.updatePatientDetails(val).subscribe((res) => {
      alert(res.toString());
      this.closeClick.emit();
    });

  }

}
