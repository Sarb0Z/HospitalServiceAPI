import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-visits',
  templateUrl: './show-visits.component.html',
  styleUrls: ['./show-visits.component.css'],
})
export class ShowVisitsComponent implements OnInit {
  visitList: any = [];

  visit: any;

  activateReceiptCom: boolean = false;
  receiptID: number = 0;
  receiptData: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.refreshVisitList();
  }
  refreshVisitList() {
    this.sharedService.getVisitPage().subscribe((data) => {
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
  }

  EditVisit(item: any) {
    this.visit = item;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.sharedService.deleteVisit(item.id).subscribe((data) => {
        alert(data.toString());
        this.refreshVisitList();
      });
    }
  }

  closeClick() {
    this.activateReceiptCom = false;
  }

  showReceipt(ID: number) {
    this.receiptID = ID;
    this.activateReceiptCom = true;
  }
  columnsToDisplay = ['id', 'p_name', 'timing', 'purpose', 'd_name', 'action1', 'action2', 'action3'];

}
