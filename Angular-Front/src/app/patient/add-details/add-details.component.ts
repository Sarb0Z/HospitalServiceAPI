import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  @Input() patient:any;
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();
  patientDetail: any = this.form.group({
    blood_type: '',
    bone_density: 0,
  })
  

  constructor(private form:FormBuilder, private service:SharedService) { }

  ngOnInit(): void {
    console.log(this.patient[0]);
  }
  AddDetails(){
    var val = {
      patient_id: this.patient.id,
      blood_type: this.patientDetail.value.blood_type,
      bone_density: this.patientDetail.value.bone_density,
    };
    console.log(val);
    this.service.addPatientDetails(val).subscribe((res) => {
      alert(res.toString());
      this.closeClick.emit();
    });

  }


}
