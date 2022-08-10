/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Prescription = {
    id?: number;
    patient_id?: number;
    doctor_id?: number;
    medicine_id?: number;
    recommendation?: string | null;
    intake_amount?: number;
};
