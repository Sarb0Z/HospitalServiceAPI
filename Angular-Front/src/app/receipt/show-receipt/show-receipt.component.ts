import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-receipt',
  templateUrl: './show-receipt.component.html',
  styleUrls: ['./show-receipt.component.css']
})
export class ShowReceiptComponent implements OnInit {
  @Input() receiptID: number = 0;
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  id: number = 0;
  receiptData: any;
  details:string="";
  amount:number=0;


  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.id = this.receiptID;
    this.showReceipt();


  }


  showReceipt() {
    this.service.getReceipt(this.id).subscribe(data => {
      this.receiptData = data;
      this.receiptData=JSON.parse(this.receiptData);
      this.details=this.receiptData[0].details;
      this.amount=this.receiptData[0].amount;
    });
  }

  
}
