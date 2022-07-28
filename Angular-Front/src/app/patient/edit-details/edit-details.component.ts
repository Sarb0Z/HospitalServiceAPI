import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/Services/shared.service';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  @Input() patient:any;
  id:number=0;
  patientDetail!: FormGroup;

  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  constructor(private service:SharedService, private form:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.form.group({
      blood_type: this.patient.blood_type,
      bone_density: this.patient.bone_density,
    })
    this.id=this.patient.id;

  }
  updatePatientDetails(){
    var val = {
      details_id:this.patient.detailsID,
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
