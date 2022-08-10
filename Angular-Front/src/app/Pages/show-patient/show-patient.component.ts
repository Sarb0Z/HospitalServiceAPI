import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
// import { Patient, PatientService } from 'src/app/api';
import { PatientApiService } from 'src/app/Services/PatientApi/patient-api.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css'],
})
export class ShowPatientComponent implements OnInit, AfterViewInit {
  patientList: any = [];
  patient: any;
  toggleAdd:boolean=false;
  toggleEdit:boolean=false;

  dataSource:any;

  constructor(private patientService: PatientApiService, private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort?: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.refreshPatientList();
  }
  async refreshPatientList() {
    this.patientService.getPatientList().subscribe((data) => {
      this.patientList = data;
      this.patientList = JSON.parse(this.patientList);
      this.dataSource = new MatTableDataSource(this.patientList);
    });
    // this.patientList=await PatientService.getApiPatient();
    // this.dataSource=new MatTableDataSource(this.patientList);

  }

  AddPatient() {
    this.patient = {
      id: 0,
      patient_name: '',
      cnic: '',
      dob: new Date()
    };
    this.toggleAdd=true;
  }

  EditPatient(item: any) {
    this.patient = item;
    this.toggleEdit=true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.patientService.deletePatient(item.id).subscribe((data) => {
        alert(data.toString());
        this.refreshPatientList();
      });
    }
    this.toggleAdd=this.toggleEdit=false;

  }

  closeClick() {
    this.refreshPatientList();
    this.toggleAdd=this.toggleEdit=false;

  }
   /** Announce the change in sort state for assistive technology. */
   announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  columnsToDisplay = ['id', 'patient_name', 'cnic', 'dob', 'Action1', 'Action2'];
}
