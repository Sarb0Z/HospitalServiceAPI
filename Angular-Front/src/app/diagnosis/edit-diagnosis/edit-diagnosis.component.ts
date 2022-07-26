import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-diagnosis',
  templateUrl: './edit-diagnosis.component.html',
  styleUrls: ['./edit-diagnosis.component.css']
})
export class EditDiagnosisComponent implements OnInit {

  @Input() diagnosis: any;
  @Output('refreshDoctorList') refreshDoctorList: EventEmitter<any> =
    new EventEmitter();
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  id: number = 0;
  doctor_name: string = '';
  title: string = '';

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.id = this.diagnosis.id;
    this.doctor_name = this.diagnosis.doctor_name;
    this.title = this.diagnosis.title;
  }

  updateDoctor() {
    var val = {
      id: this.diagnosis.id,
      doctor_name: this.doctor_name,
      title: this.title,
    };
    this.service.updateDoctor(val).subscribe((res) => {
      alert(res.toString());
      this.refreshDoctorList.emit();
    });
  }

}
