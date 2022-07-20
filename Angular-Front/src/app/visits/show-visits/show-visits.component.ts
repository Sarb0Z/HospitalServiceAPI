import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-visits',
  templateUrl: './show-visits.component.html',
  styleUrls: ['./show-visits.component.css']
})
export class ShowVisitsComponent implements OnInit {
  visitList: any = [];
  modalTitle: any;
  activateAddEditVisitCom: boolean = false;
  visit: any;

  activateReceiptCom: boolean = false;
  receiptData:any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshVisitList();
  }
  refreshVisitList() {
    this.sharedService.getVisitList().subscribe(data => {
      this.visitList = data;
      this.visitList = JSON.parse(this.visitList);
      
    });
  }

  AddVisit() {
    this.visit = {
      id: 0,
      timing: new Date,
      purpose: "",
      patient_id: 0,
      doctor_id:0
    }
    this.modalTitle = "Add Visit";
    this.activateAddEditVisitCom = true;
  }

  EditVisit(item: any) {
    this.visit = item;
    this.activateAddEditVisitCom = true;
    this.modalTitle = "Update Visit";
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.sharedService.deleteVisit(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshVisitList();
      })
    }
  }

  closeClick() {
    this.activateAddEditVisitCom = false;
    this.refreshVisitList();
  }

  showReceipt(id:any){
    this.sharedService.getReceipt(id).subscribe(data => {
      this.receiptData=data;
      this.refreshVisitList();
      this.activateAddEditVisitCom=true;

    })

  }

}
