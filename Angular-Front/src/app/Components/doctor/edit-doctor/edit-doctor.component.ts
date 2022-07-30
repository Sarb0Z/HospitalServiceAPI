import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DoctorApiService } from 'src/app/Services/doctor-api.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css'],
})
export class EditDoctorComponent implements OnInit {
  @Input() doctor: any;
  @Output('refreshDoctorList') refreshDoctorList: EventEmitter<any> =
    new EventEmitter();
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  id: number = 0;
  doctor_name: string = '';
  title: string = '';

  modalTitle:string="Edit Doctor"

  constructor(private doctorService: DoctorApiService) {}

  ngOnInit(): void {
    this.id = this.doctor.id;
    this.doctor_name = this.doctor.doctor_name;
    this.title = this.doctor.title;
  }

  updateDoctor() {
    var val = {
      id: this.doctor.id,
      doctor_name: this.doctor_name,
      title: this.title,
    };
    this.doctorService.updateDoctor(val).subscribe((res) => {
      alert(res.toString());
      this.refreshDoctorList.emit();
    });
  }
}
