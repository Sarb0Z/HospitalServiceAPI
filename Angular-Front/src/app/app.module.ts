import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './MaterialUI/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ShowDoctorComponent } from './Pages/show-doctor/show-doctor.component';
import { ShowPatientComponent } from './Pages/show-patient/show-patient.component';
import { GenericListComponent } from './Utilities/generic-list/generic-list.component';
import { VisitsComponent } from './Components/visits/visits.component';
import { ShowVisitsComponent } from './Pages/show-visit/show-visits.component';
import { PatientDetailsComponent } from './Components/patient/patient-details/patient-details.component';
import { DiagnosisComponent } from './Components/diagnosis/diagnosis.component';
import { ShowDiagnosisComponent } from './Pages/show-diagnosis/show-diagnosis.component';
import { MenuComponent } from './Menu/DashBoardMenu/menu.component';
import { ShowReceiptComponent } from './Components/receipt/show-receipt/show-receipt.component';
import { SearchPatientComponent } from './Components/patient/search-patient/search-patient.component';
import { AddDoctorComponent } from './Components/doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './Components/doctor/edit-doctor/edit-doctor.component';
import { AddPatientComponent } from './Components/patient/add-patient/add-patient.component';
import { EditPatientComponent } from './Components/patient/edit-patient/edit-patient.component';
import { AddVisitComponent } from './Components/visits/add-visit/add-visit.component';
import { EditVisitComponent } from './Components/visits/edit-visit/edit-visit.component';
import { ShowPrescriptionComponent } from './Components/prescription/show-prescription/show-prescription.component';
import { UpdatePrescriptionComponent } from './Components/prescription/update-prescription/update-prescription.component';
import { AddPrescriptionComponent } from './Components/prescription/add-prescription/add-prescription.component';
import { DeletePrescriptionComponent } from './Components/prescription/delete-prescription/delete-prescription.component';
import { EditDetailsComponent } from './Components/patient/edit-details/edit-details.component';
import { EditDiagnosisComponent } from './Components/diagnosis/edit-diagnosis/edit-diagnosis.component';
import { AddDiagnosisComponent } from './Components/diagnosis/add-diagnosis/add-diagnosis.component';
import { ShowDetailsComponent } from './Components/patient/show-details/show-details.component';
import { GenericModalComponent } from './Utilities/generic-modal/generic-modal.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
// import { NavbarComponent } from './Menu/AuthMenu/navbar.component';


import { SharedService } from './Services/shared.service';
import { AuthInterceptorService } from './Services/AuthApi/AuthInterceptor/auth-interceptor.service';
import { AuthGuardService } from './Services/AuthApi/AuthGuard/auth-guard.service';


const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuardService] },
  { path: 'doctor', component: ShowDoctorComponent, canActivate: [AuthGuardService] },
  { path: 'patient', component: ShowPatientComponent, canActivate: [AuthGuardService] },
  { path: 'visits', component: VisitsComponent, canActivate: [AuthGuardService] },
  { path: 'diagnosis', component: DiagnosisComponent, canActivate: [AuthGuardService] },
  { path: 'searchpatient', component: SearchPatientComponent, canActivate: [AuthGuardService] },
  { path: 'getpatientdetails', component: PatientDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', redirectTo: 'Login' }

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
    EditVisitComponent,
    ShowPrescriptionComponent,
    UpdatePrescriptionComponent,
    AddPrescriptionComponent,
    DeletePrescriptionComponent,
    EditDetailsComponent,
    EditDiagnosisComponent,
    AddDiagnosisComponent,
    ShowDetailsComponent,
    GenericModalComponent,
    LoginComponent,
    RegisterComponent,
    // NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    }),
  ],
  providers: [SharedService, 
    {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
