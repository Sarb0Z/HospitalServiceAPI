/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PatientDiagnosisService {

    /**
     * @param cnic 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiPatientDiagnosis(
cnic?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PatientDiagnosis',
            query: {
                'cnic': cnic,
            },
        });
    }

}
