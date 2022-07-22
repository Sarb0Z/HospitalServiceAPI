import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
})
export class AddDoctorComponent implements OnInit {
  @Input() doctor: any;

  @Output('refreshDoctorList') refreshDoctorList: EventEmitter<any> =
    new EventEmitter();
  @Output('closeClick') closeClick: EventEmitter<any> =
    new EventEmitter();  

  id: number = 0;
  doctor_name: string = '';
  title: string = '';

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.id = this.doctor.id;
    this.doctor_name = this.doctor.doctor_name;
    this.title = this.doctor.title;
  }

  addDoctor() {
    var val = {
      doctor_name: this.doctor_name,
      title: this.title,
    };
    this.service.addDoctor(val).subscribe((res) => {
      alert(res.toString());
      this.refreshDoctorList.emit();

    });
  }
}
