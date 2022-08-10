import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Diagnosis } from 'src/app/Interfaces/diagnosis';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisApiService {

  private http: {
    fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
  };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    @Inject(String) baseUrl: '',
    http: HttpClient
  ) {
    this.http = http ? http : (window as any);
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * @return Success
   */
  diagnosisGET(): Promise<void> {
    let url_ = this.baseUrl + '/api/Diagnosis';
    url_ = url_.replace(/[?&]$/, '');

    let options_: RequestInit = {
      method: 'GET',
      headers: {},
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processDiagnosisGET(_response);
    });
  }

  protected processDiagnosisGET(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        return;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          'An unexpected server error occurred.',
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<void>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  diagnosisPOST(body: Diagnosis | undefined): Promise<void> {
    let url_ = this.baseUrl + '/api/Diagnosis';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
      body: content_,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processDiagnosisPOST(_response);
    });
  }

  protected processDiagnosisPOST(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        return;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          'An unexpected server error occurred.',
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<void>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  diagnosisPUT(body: Diagnosis | undefined): Promise<void> {
    let url_ = this.baseUrl + '/api/Diagnosis';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
      body: content_,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processDiagnosisPUT(_response);
    });
  }

  protected processDiagnosisPUT(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        return;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          'An unexpected server error occurred.',
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<void>(null as any);
  }

  /**
   * @return Success
   */
  diagnosisDELETE(id: number): Promise<void> {
    let url_ = this.baseUrl + '/api/Diagnosis/{id}';
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent('' + id));
    url_ = url_.replace(/[?&]$/, '');

    let options_: RequestInit = {
      method: 'DELETE',
      headers: {},
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processDiagnosisDELETE(_response);
    });
  }

  protected processDiagnosisDELETE(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        return;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          'An unexpected server error occurred.',
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<void>(null as any);
  }
}
function throwException(arg0: string, status: number, _responseText: string, _headers: any): any {
  throw new Error('Function not implemented.');
}

