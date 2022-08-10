/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { Diagnosis } from './models/Diagnosis';
export type { Doctor } from './models/Doctor';
export type { logs } from './models/logs';
export type { Passwords } from './models/Passwords';
export type { Patient } from './models/Patient';
export type { PatientDetails } from './models/PatientDetails';
export type { Prescription } from './models/Prescription';
export type { User } from './models/User';
export type { Visit } from './models/Visit';
export type { WeatherForecast } from './models/WeatherForecast';

export { DiagnosisService } from './services/DiagnosisService';
export { DoctorService } from './services/DoctorService';
export { LoggingService } from './services/LoggingService';
export { MedicineService } from './services/MedicineService';
export { PasswordService } from './services/PasswordService';
export { PatientService } from './services/PatientService';
export { PatientDetailsService } from './services/PatientDetailsService';
export { PatientDiagnosisService } from './services/PatientDiagnosisService';
export { PatientPrescriptionService } from './services/PatientPrescriptionService';
export { PrescriptionService } from './services/PrescriptionService';
export { ReceiptService } from './services/ReceiptService';
export { TestService } from './services/TestService';
export { UserService } from './services/UserService';
export { VisitService } from './services/VisitService';
export { VisitPageService } from './services/VisitPageService';
export { WeatherForecastService } from './services/WeatherForecastService';
