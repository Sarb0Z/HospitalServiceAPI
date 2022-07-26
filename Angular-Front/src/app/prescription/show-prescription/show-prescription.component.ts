import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-prescription',
  templateUrl: './show-prescription.component.html',
  styleUrls: ['./show-prescription.component.css'],
})
export class ShowPrescriptionComponent implements OnInit {
  @Input() cnic: string = ""
  prescriptionData:any;
  patientList:any;
  clicked:boolean=false;

  constructor(private service: SharedService) {

  }

  ngOnInit(): void {

  }
  showPrescription(){
    this.clicked=!this.clicked;
    this.service.getPrescription(this.cnic).subscribe((data)=>{
      this.prescriptionData=data;
      this.prescriptionData=JSON.parse(this.prescriptionData);
      console.log(this.prescriptionData);
    });

  }
  columnsToDisplay = ['cnic', 'patient_name', 'doctor_name', 'medicine_name', 'supplier_name','recommendation', 'intake_amount', 'Action1', 'Action2'];

  
}
