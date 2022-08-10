/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { logs } from '../models/logs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LoggingService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiLogging(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Logging',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiLogging(
requestBody?: logs,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Logging',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
