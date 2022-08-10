/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatientDetails } from '../models/PatientDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PatientDetailsService {

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiPatientDetails(
id?: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PatientDetails',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiPatientDetails(
requestBody?: PatientDetails,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/PatientDetails',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putApiPatientDetails(
requestBody?: PatientDetails,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/PatientDetails',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiPatientDetails(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/PatientDetails/{id}',
            path: {
                'id': id,
            },
        });
    }

}
