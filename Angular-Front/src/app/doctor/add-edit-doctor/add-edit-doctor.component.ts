import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-doctor',
  templateUrl: './add-edit-doctor.component.html',
  styleUrls: ['./add-edit-doctor.component.css']
})
export class AddEditDoctorComponent implements OnInit {
  @Input() doctor:any;
  id:number=0;
  doctor_name: string ="";
  title: string ="";

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.id=this.doctor.id;
    this.doctor_name = this.doctor.doctor_name;
    this.title = this.doctor.title;
  }

  addDoctor(){
    var val = {
      doctor_name:this.doctor_name,
      title:this.title};
      this.service.addDoctor(val).subscribe(res =>{
        alert(res.toString());
      })
  }

  updateDoctor(){
    var val = {
      id:this.doctor.id,
      doctor_name:this.doctor_name,
      title:this.title
    };
      this.service.updateDoctor(val).subscribe(res =>{
        alert(res.toString());
    })
  }

}
