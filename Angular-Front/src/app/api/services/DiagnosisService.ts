/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Diagnosis } from '../models/Diagnosis';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DiagnosisService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiDiagnosis(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Diagnosis',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiDiagnosis(
requestBody?: Diagnosis,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Diagnosis',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putApiDiagnosis(
requestBody?: Diagnosis,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Diagnosis',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiDiagnosis(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Diagnosis/{id}',
            path: {
                'id': id,
            },
        });
    }

}
