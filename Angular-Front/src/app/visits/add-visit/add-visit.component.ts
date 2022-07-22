import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css'],
})
export class AddVisitComponent implements OnInit {
  @Output('refreshVList') refreshVisitList: EventEmitter<any> =
    new EventEmitter();
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  @Input() visit: any;
  id: number = 0;
  doctor_id: number = 0;
  patient_id: number = 0;
  purpose: string = '';
  timing: Date = new Date();

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.id = this.visit.id;
    this.doctor_id = this.visit.doctor_id;
    this.patient_id = this.visit.patient_id;
    this.timing = this.visit.timing;
    this.purpose = this.visit.purpose;
  }

  addVisit() {
    var val = {
      doctor_id: this.doctor_id,
      patient_id: this.patient_id,
      purpose: this.purpose,
      timing: this.timing,
    };
    this.service.addVisit(val).subscribe((res) => {
      alert(res.toString());
      this.refreshVisitList.emit();
    });
  }
}
