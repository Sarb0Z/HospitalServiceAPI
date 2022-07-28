import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css']
})
export class AddDiagnosisComponent implements OnInit {

  @Input() patientID: any;

  @Output('closeClick') closeClick: EventEmitter<any> =
    new EventEmitter();
  @Output('saveChanges') saveChanges: EventEmitter<any> =
    new EventEmitter();


  doctor: number = 0;
  visit: number = 0;
  result:string='';

  constructor(private service: SharedService) {}

  ngOnInit(): void {
  }

  addDiagnosis() {
    var val = {
      doctor: this.doctor,
      visit: this.visit,
      result:this.result,
      patient_id:this.patientID
    };
    this.service.addDiagnosis(val).subscribe((res) => {
      alert(res.toString());
      this.saveChanges.emit()

    });
  }
}


