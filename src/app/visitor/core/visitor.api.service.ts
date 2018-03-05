import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Visitor } from './visitor.model';
import { VisitorListApiResponseInterface, VisitorApiServiceInterface } from './visitor.api.interface';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class VisitorApiService implements VisitorApiServiceInterface {

    constructor(
        public http: HttpClient,
        @Inject('CLOUD_FUNCTIONS_DOMAIN') public domain: string
    ) {}

    public getVisitors(): Observable<Visitor[]> {
        return this.http
            .get<VisitorListApiResponseInterface>(`${this.domain}/ListVisitor`)
            .map((response: VisitorListApiResponseInterface) => response.visitors)
            .share();
    }

    public putVisitor(visitor: Visitor): Observable<string> {
        return this.http
            .post<string>(`${this.domain}/CreateVisitor`, visitor.type as string)
            .share();
    }
}
