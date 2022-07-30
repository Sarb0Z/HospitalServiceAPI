import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrescriptionApiService } from 'src/app/Services/prescription-api.service';

@Component({
  selector: 'app-show-prescription',
  templateUrl: './show-prescription.component.html',
  styleUrls: ['./show-prescription.component.css'],
})
export class ShowPrescriptionComponent implements OnInit {
  @Input() cnic: string = '';
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  prescriptionData: any;
  patientList: any;
  clicked: boolean = false;

  prescription: string = 'Prescriptions';

  constructor(private prescriptionService: PrescriptionApiService) {}

  ngOnInit(): void {
    this.showPrescription();
  }
  showPrescription() {
    this.clicked = !this.clicked;
    this.prescriptionService.getPrescription(this.cnic).subscribe((data) => {
      this.prescriptionData = data;
      this.prescriptionData = JSON.parse(this.prescriptionData);
    });
  }
  columnsToDisplay = [
    'doctor_name',
    'medicine_name',
    'supplier_name',
    'recommendation',
    'intake_amount',
    'Action1',
    'Action2',
  ];
}