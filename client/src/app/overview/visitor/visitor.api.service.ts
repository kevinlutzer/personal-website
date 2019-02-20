import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Visitor } from './visitor.model';
import {
    VisitorApiServiceInterface,
    buildVisitorCreateApiRequestInterface,
    VisitorCreateApiResponseInterface
} from './visitor.api.interface';

@Injectable()
export class VisitorApiService implements VisitorApiServiceInterface {

    constructor(public httpClient: HttpClient) {}

    public create(visitor: Visitor): Observable<VisitorCreateApiResponseInterface> {
        return this.httpClient
            .post<VisitorCreateApiResponseInterface>(`/api/visitor/create/`, buildVisitorCreateApiRequestInterface(visitor));
    }
}
