import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  patientDetails: any;
  patientData: any;
  prescriptionData:any;

  dataFlag: boolean = false;
  detailsFlag:boolean=false;
  toggleEdit:boolean=false;
  toggleAdd:boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {}

  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      cnic: ''

    });
  }

  saveChanges() {
    this.dataFlag = false;
    this.detailsFlag=false;


    this.sharedService.getPatientByNameOrCnic(this.form.value.name, this.form.value.cnic)
    .subscribe((data) => {
      this.patientData = data;
      this.patientData = JSON.parse(this.patientData);

      if (this.patientData) {
        this.sharedService
          .getPatientDetails(this.patientData.id)
          .subscribe((data) => {
            this.patientDetails = data;
            this.patientDetails = JSON.parse(this.patientDetails);
            if (this.patientDetails){
              this.detailsFlag=true;
            }
          });
        this.sharedService.getPrescription(this.form.value.cnic).subscribe((data)=>{
          this.prescriptionData=data;
          this.prescriptionData=JSON.parse(this.prescriptionData);
          console.log(this.prescriptionData);
        })  
        this.dataFlag = true;
      }
    });
  }

  closeClick() {
    this.dataFlag=this.detailsFlag=false;
    this.toggleAdd=this.toggleEdit=false;
    this.saveChanges();
  }

  editDetails() {
    this.toggleEdit=true;
  }
  addDetails() {
    this.toggleAdd=true;
  }
}
