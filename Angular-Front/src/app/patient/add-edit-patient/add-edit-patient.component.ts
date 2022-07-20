import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.css']
})
export class AddEditPatientComponent implements OnInit {
  @Input() patient:any;
  id:number=0;
  patient_name: string ="";
  cnic: string ="";
  dob: Date= new Date();

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.id=this.patient.id;
    this.patient_name = this.patient.patient_name;
    this.cnic = this.patient.cnic;
    this.dob = this.patient.dob;
  }

  addPatient(){
    var val = {
      patient_name:this.patient_name,
      cnic:this.cnic,
      dob:this.dob
    };
      this.service.addPatient(val).subscribe(res =>{
        alert(res.toString());
      })
  }

  updatePatient(){
    var val = {
      patient_name:this.patient_name,
      cnic:this.patient.cnic,
      dob:this.patient.dob
    };
      this.service.updatePatient(val).subscribe(res =>{
        alert(res.toString());
    })
  }

}
