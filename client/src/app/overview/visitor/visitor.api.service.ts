import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Visitor } from './visitor.model';
import { VisitorApiServiceInterface, VisitorCreateApiResponseInterface, buildVisitorCreateSuccessApiResponse, buildVisitorCreateApiRequest } from './visitor.api.interface';

@Injectable()
export class VisitorApiService implements VisitorApiServiceInterface {

    constructor(public httpClient: HttpClient) {}

    public create(visitor: Visitor): Observable<VisitorCreateApiResponseInterface> {
        return this.httpClient
            .post<VisitorCreateApiResponseInterface>(`/api/visitor/create/`, buildVisitorCreateApiRequest(visitor))
            .pipe(map(buildVisitorCreateSuccessApiResponse))
            .share();
    }
}
