import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Visitor } from './visitor.model';
import { VisitorApiServiceInterface, buildVisitorCreateApiRequestInterface, VisitorCreateApiResponseInterface } from './visitor.api.interface';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/share';
// import 'rxjs/add/operator/map';

@Injectable()
export class VisitorApiService implements VisitorApiServiceInterface {

    constructor(public httpClient: HttpClient) {}

    public create(visitor: Visitor): Observable<{message: string}> {
        return this.httpClient
            .post<VisitorCreateApiResponseInterface>(`/api/visitor/create/`, buildVisitorCreateApiRequestInterface(visitor))
            // .pipe(map())
            .share();
    }
}
