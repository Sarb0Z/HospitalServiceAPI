import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VisitApiService } from 'src/app/Services/visit-api.service';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css'],
})
export class AddVisitComponent implements OnInit {
  @Output('refreshVList') refreshVisitList: EventEmitter<any> =
    new EventEmitter();
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  id: number = 0;
  doctor_id: number = 0;
  patient_id: number = 0;
  purpose: string = '';
  timing: Date = new Date();

  constructor(private visitService: VisitApiService) {}

  ngOnInit(): void {

  }

  addVisit() {
    var val = {
      doctor_id: this.doctor_id,
      patient_id: this.patient_id,
      purpose: this.purpose,
      timing: this.timing,
    };
    this.visitService.addVisit(val).subscribe((res) => {
      alert(res.toString());
      this.refreshVisitList.emit();
    });
  }
}
