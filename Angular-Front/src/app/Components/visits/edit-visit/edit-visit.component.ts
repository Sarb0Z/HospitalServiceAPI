import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VisitApiService } from 'src/app/Services/VisitApi/visit-api.service';

@Component({
  selector: 'app-edit-visit',
  templateUrl: './edit-visit.component.html',
  styleUrls: ['./edit-visit.component.css'],
})
export class EditVisitComponent implements OnInit {
  @Output('refreshVList') refreshVisitList: EventEmitter<any> =
    new EventEmitter();
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  @Input() visit: any;
  id: number = 0;
  doctor_id: number = 0;
  patient_id: number = 0;
  purpose: string = '';
  timing: Date = new Date();
  visitList: any;

  modalTitle: string = 'Edit Visit';

  constructor(private visitService: VisitApiService) {}

  ngOnInit(): void {
    this.visitService.getVisitList().subscribe((data) => {
      this.visitList = data;
      this.visitList = JSON.parse(this.visitList);
      let obj = this.visitList.find((o: { id: any }) => o.id == this.visit.id);
      this.id = this.visit.id;
      this.doctor_id = obj.doctor_id;
      this.patient_id = obj.patient_id;
      this.timing = new Date(this.visit.timing);
      this.purpose = this.visit.purpose;
    });
  }

  updateVisit() {
    var val = {
      id: this.visit.id,
      doctor_id: this.doctor_id,
      patient_id: this.patient_id,
      purpose: this.purpose,
      timing: this.timing,
    };
    this.visitService.updateVisit(val).subscribe((res) => {
      alert(res.toString());
      this.refreshVisitList.emit();
    });
  }
}
