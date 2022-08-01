import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  @Input() patient:any;
  @Output('closeClick') closeClick: EventEmitter<any> = new EventEmitter();

  id:number=0;

  modalTitle:string="Patient Details"
  constructor() { }

  ngOnInit(): void {
  }

}
