/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReceiptService {

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiReceipt(
id?: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Receipt',
            query: {
                'id': id,
            },
        });
    }

}
