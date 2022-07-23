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

  constructor(private service: SharedService) {

  }

  ngOnInit(): void {

  }
  showPrescription(){

    this.service.getPrescription(this.cnic).subscribe((data)=>{
      this.prescriptionData=data;
      this.prescriptionData=JSON.parse(this.prescriptionData);

    });

  }

  
}
