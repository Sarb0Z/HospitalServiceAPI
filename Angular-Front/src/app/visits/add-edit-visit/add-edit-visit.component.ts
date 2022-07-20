import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-visit',
  templateUrl: './add-edit-visit.component.html',
  styleUrls: ['./add-edit-visit.component.css']
})
export class AddEditVisitComponent implements OnInit {
  @Input() visit:any;
  id:number=0;
  doctor_name: string ="";
  patient_name: string = "";
  purpose: string ="";
  timing:Date=new Date();

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.id=this.visit.id;
    this.doctor_name = this.visit.doctor_name;
    this.patient_name = this.visit.patient_name;
    this.timing = this.visit.timing;
    this.purpose = this.visit.purpose;
  }

  addVisit(){
    var val = {
      doctor_name:this.doctor_name,
      patient:this.patient_name,
      purpose:this.purpose,
      timing:this.timing
    
    };
      this.service.addVisit(val).subscribe(res =>{
        alert(res.toString());
      })
  }

  updateVisit(){
    var val = {
      id:this.visit.id,
      doctor_name:this.doctor_name,
      patient_name:this.patient_name,
      purpose:this.purpose,
      timing:this.timing
    };
      this.service.updateVisit(val).subscribe(res =>{
        alert(res.toString());
    })
  }

}
