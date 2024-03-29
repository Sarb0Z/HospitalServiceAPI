import { Component, OnInit } from '@angular/core';
import { VisitApiService } from 'src/app/Services/VisitApi/visit-api.service';

@Component({
  selector: 'app-show-visits',
  templateUrl: './show-visits.component.html',
  styleUrls: ['./show-visits.component.css'],
})
export class ShowVisitsComponent implements OnInit {
  visitList: any = [];
  visit: any;

  activateReceiptCom: boolean = false;
  toggleAdd:boolean=false;
  toggleEdit:boolean=false;

  receiptID: number = 0;
  receiptData: any;

  
  constructor(private visitService: VisitApiService) {}

  ngOnInit(): void {
    this.refreshVisitList();
  }
  refreshVisitList() {
    this.visitService.getVisitPage().subscribe((data) => {
      this.visitList = data;
      this.visitList = JSON.parse(this.visitList);
    });
  }

  AddVisit() {
    this.visit = {
      id: 0,
      timing: new Date(),
      purpose: '',
      patient_name: '',
      doctor_name: '',
    };
    this.toggleAdd=true;
  }

  EditVisit(item: any) {
     
    this.visit = item;
    this.toggleEdit=true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.visitService.deleteVisit(item.id).subscribe((data) => {
        alert(data.toString());
        this.refreshVisitList();
      });
    }
    this.toggleAdd=this.toggleEdit=false;

  }

  closeClick() {
    this.activateReceiptCom = false;
    this.refreshVisitList();
    this.toggleAdd=this.toggleEdit=false;

  }

  columnsToDisplay = ['id', 'p_name', 'timing', 'purpose', 'd_name', 'action1', 'action2', 'action3'];

}
