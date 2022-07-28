import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-diagnosis',
  templateUrl: './show-diagnosis.component.html',
  styleUrls: ['./show-diagnosis.component.css'],
})
export class ShowDiagnosisComponent implements OnInit {
  patientDiagnosisList: any = [];
  dataFlag:boolean=false;
  patientID:number=0;

  toggleAdd:boolean=false;
  toggleEdit:boolean=false;

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService) { }

  form!: FormGroup
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: ['' , {
        validators: [Validators.required]
      }],
      cnic: ['' , {
        validators: [Validators.required]
      }]
    });


  }

  saveChanges(){
    this.dataFlag=false;
    this.sharedService.getPatientDiagnosis(this.form.value.cnic).subscribe(data => {
      this.patientDiagnosisList = data;
      this.patientDiagnosisList=JSON.parse(this.patientDiagnosisList);
      if (this.patientDiagnosisList){
        this.dataFlag=true;
        this.toggleAdd=true;
      }
      
    });
  }
  AddDiagnosis(){
    console.log(this.form.value.id);
    this.patientID=this.form.value.id;
    this.toggleAdd=true;

  }
  EditDiagnosis(){

  }
  closeClick() {
    this.saveChanges();

  }
}


