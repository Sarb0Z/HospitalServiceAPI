/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Patient } from '../models/Patient';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PatientService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiPatient(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Patient',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiPatient(
requestBody?: Patient,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Patient',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putApiPatient(
requestBody?: Patient,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Patient',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiPatient1(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Patient/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiPatient(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Patient/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param name 
     * @param cnic 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiPatientGetByName(
name?: string,
cnic?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Patient/GetByName',
            query: {
                'name': name,
                'cnic': cnic,
            },
        });
    }

}
