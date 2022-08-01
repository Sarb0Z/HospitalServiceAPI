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

  modalTitle: string = 'Prescriptions';

  constructor(private prescriptionService: PrescriptionApiService) {}

  ngOnInit(): void {
    this.showPrescription();
  }
  showPrescription() {
    this.prescriptionService.getPrescription(this.cnic).subscribe((data) => {
      this.prescriptionData = data;
      this.prescriptionData = JSON.parse(this.prescriptionData);
    });
  }
  deletePrescription(id:number) {
    if (confirm('Are you sure??')) {
      this.prescriptionService
        .deletePrescription(id)
        .subscribe((res) => {
          alert(res.toString());
          this.showPrescription();
        });
    }
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
