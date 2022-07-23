import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patientDetails: any = "";
  patientData: any;
  dataFlag:boolean=false;
  

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService) { }

  form!: FormGroup
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [ , {
        validators: [Validators.required]
      }],
      cnic: ''
    });


  }

  saveChanges(){
    this.dataFlag=false;
    this.sharedService.getPatient(this.form.value.id).subscribe(data=>{
      this.patientData=data;
      this.patientData=JSON.parse(this.patientData);
    
      
      if (this.patientData){
        this.sharedService.getPatientDetails(this.form.value.id).subscribe(data => {
          this.patientDetails = data;
          this.patientDetails=JSON.parse(this.patientDetails);
        })
        this.dataFlag=true;
      }
      
    });


  }


}
