/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Passwords } from '../models/Passwords';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PasswordService {

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiPassword(
id?: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Password',
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
    public static postApiPassword(
requestBody?: Passwords,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putApiPassword(
requestBody?: Passwords,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
