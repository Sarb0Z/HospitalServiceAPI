import { HttpClientModule } from '@angular/common/http';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { ShowDoctorComponent } from './show-doctor/show-doctor.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { VisitsComponent } from './visits/visits.component';
import { ShowVisitsComponent } from './show-visit/show-visits.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { ShowDiagnosisComponent } from './diagnosis/show-diagnosis/show-diagnosis.component';
import { MenuComponent } from './menu/menu.component';
import { ShowReceiptComponent } from './receipt/show-receipt/show-receipt.component';
import { SearchPatientComponent } from './patient/search-patient/search-patient.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { EditPatientComponent } from './patient/edit-patient/edit-patient.component';


import { SharedService } from './shared.service';
import { AddVisitComponent } from './visits/add-visit/add-visit.component';
import { EditVisitComponent } from './visits/edit-visit/edit-visit.component';




const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'doctor', component: ShowDoctorComponent },
  { path: 'patient', component: ShowPatientComponent },
  { path: 'visits', component: VisitsComponent },
  { path: 'diagnosis', component: DiagnosisComponent },
  { path: 'searchpatient', component: SearchPatientComponent },
  { path: 'getpatientdetails', component: PatientDetailsComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    ShowDoctorComponent,
    ShowPatientComponent,
    GenericListComponent,
    VisitsComponent,
    ShowVisitsComponent,
    PatientDetailsComponent,
    DiagnosisComponent,
    ShowDiagnosisComponent,
    MenuComponent,
    ShowReceiptComponent,
    SearchPatientComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    AddPatientComponent,
    EditPatientComponent,
    AddVisitComponent,
    EditVisitComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
