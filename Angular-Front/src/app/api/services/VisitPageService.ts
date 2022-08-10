/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VisitPageService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiVisitPage(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/VisitPage',
        });
    }

}
