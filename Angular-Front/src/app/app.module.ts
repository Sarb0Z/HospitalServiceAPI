import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ShowDoctorComponent } from './show-doctor/show-doctor.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { VisitsComponent } from './visits/visits.component';
import { ShowVisitsComponent } from './visits/show-visits/show-visits.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { ShowDiagnosisComponent } from './diagnosis/show-diagnosis/show-diagnosis.component';
import { MenuComponent } from './menu/menu.component';
import { AddEditDoctorComponent } from './doctor/add-edit-doctor/add-edit-doctor.component';
import { AddEditPatientComponent } from './patient/add-edit-patient/add-edit-patient.component';


import { SharedService } from './shared.service';
import { AddEditVisitComponent } from './visits/add-edit-visit/add-edit-visit.component';
import { ShowReceiptComponent } from './receipt/show-receipt/show-receipt.component';



const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'doctor', component: ShowDoctorComponent },
  { path: 'patient', component: ShowPatientComponent },
  { path: 'visits', component: VisitsComponent }


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
    AddEditDoctorComponent,
    AddEditPatientComponent,
    AddEditVisitComponent,
    ShowReceiptComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
