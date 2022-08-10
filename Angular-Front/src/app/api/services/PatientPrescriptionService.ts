/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PatientPrescriptionService {

    /**
     * @param cnic 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiPatientPrescription(
cnic?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PatientPrescription',
            query: {
                'cnic': cnic,
            },
        });
    }

}
