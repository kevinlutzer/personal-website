import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Visitor } from './visitor.model';
import { VisitorApiServiceInterface, buildVisitorCreateApiRequestInterface, VisitorCreateApiResponseInterface, VisitorCreateApiRequestInterface, buildVisitorCreateApiFailureResponseInterface, buildVisitorCreateApiSuccessResponseInterface } from './visitor.api.interface';

@Injectable()
export class VisitorApiService implements VisitorApiServiceInterface {

    constructor(public httpClient: HttpClient) {}

    public create(visitor: Visitor): Observable<VisitorCreateApiResponseInterface> {
        return this.httpClient
            .post<VisitorCreateApiResponseInterface>(`/api/visitor/create/`, buildVisitorCreateApiRequestInterface(visitor));
    }

    private handleResp(v: VisitorCreateApiResponseInterface): VisitorCreateApiResponseInterface {
        return buildVisitorCreateApiSuccessResponseInterface(v.message)
    }

    private handleError(err: HttpErrorResponse): Observable<VisitorCreateApiResponseInterface> {
        return of(buildVisitorCreateApiFailureResponseInterface(err.message));
    }
}
