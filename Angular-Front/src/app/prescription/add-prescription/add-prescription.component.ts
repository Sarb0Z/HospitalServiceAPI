import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {
  medicineList: any = [];
  testList: any = [];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }
  getInitData(){
    this.service.getMedicine().subscribe((data) => {
      this.medicineList = data;
      this.medicineList = JSON.parse(this.medicineList);
      console.log(this.medicineList);
    });
    this.service.getTest().subscribe((data) => {
      this.testList = data;
      this.testList = JSON.parse(this.testList);
      console.log(this.testList);

    });
  }

}
