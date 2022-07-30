import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/Services/shared.service';
import { PrescriptionApiService } from 'src/app/Services/prescription-api.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css'],
})
export class AddPrescriptionComponent implements OnInit {
  @Input() patientID: number = 0;
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  medicineList: any = [];
  testList: any = [];

  modalTitle: string = '';
  constructor(
    public form: FormBuilder,
    private service: SharedService,
    private prescriptionService: PrescriptionApiService
  ) {}
  patientDetail: any = this.form.group({
    doctor_id: 0,
    recommendation: '',
    intake_amount: 0,
    medicine: [''],
    test: [''],
  });
  medicineForm!: FormGroup;
  testForm!: FormGroup;

  ngOnInit(): void {
    this.medicineForm = this.form.group({
      medicine_name: this.form.array([
        this.form.group({ name: this.medicineList }),
      ]),
    });
    this.testForm = this.form.group({
      test_name: this.form.array([this.form.group({ name: this.testList })]),
    });
    this.getInitData();
  }
  getInitData() {
    this.service.getMedicine().subscribe((data) => {
      this.medicineList = data;
      this.medicineList = JSON.parse(this.medicineList);
    });
    this.service.getTest().subscribe((data) => {
      this.testList = data;
      this.testList = JSON.parse(this.testList);
    });
  }
  get medicineNames() {
    return this.medicineForm.get('medicine_name') as FormArray;
  }
  addMedicineNames() {
    // const val = this.form.group({
    //   medicine: ''
    // });
    // const medicineNames = this.medicineNames.get('medicine_name') as FormArray;
    // medicineNames.push(val);
    // console.log(medicineNames);
    this.medicineNames.push(this.form.group({ name: this.medicineList }));
  }

  deleteMedicineNames(index: number) {
    this.medicineNames.removeAt(index);
  }
  get testNames() {
    return this.testForm.get('test_name') as FormArray;
  }
  addTestNames() {
    this.testNames.push(this.form.group({ name: this.testList }));
  }

  deleteTestNames(index: number) {
    this.testNames.removeAt(index);
  }
  AddPrescription() {
    let obj = this.medicineList.find(
      (o: { medicine_name: any }) =>
        o.medicine_name === this.patientDetail.value.medicine
    );

    var med_id = obj.id;
    var val = {
      patient_id: this.patientID,
      doctor_id: this.patientDetail.value.doctor_id,
      medicine_id: med_id,
      recommendation: this.patientDetail.value.recommendation,
      intake_amount: this.patientDetail.value.intake_amount,
    };
    this.prescriptionService.addPrescription(val).subscribe((res) => {
      alert(res.toString());
      this.closeClick.emit();
    });

    // this.service.addPrescription()
  }
}
