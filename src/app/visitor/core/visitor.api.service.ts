import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Visitor } from './visitor.model';
import { VisitorListApiResponse, VisitorApiServiceInterface } from './visitor.api.interface';

@Injectable()
export class VisitorApiService implements VisitorApiServiceInterface {

    constructor(
        public http: HttpClient,
        @Inject('CLOUD_FUNCTIONS_DOMAIN') public domain: string
    ) {}

    public getVisitors(): Observable<Visitor[]> {
        return this.http
            .get<VisitorListApiResponse>(`${this.domain}/visitorLIST`)
            .map((response: VisitorListApiResponse) => response.visitors)
            .share();
    }

    public putVisitor(visitor: Visitor): Observable<string> {
        return this.http
            .post<string>(`${this.domain}/visitorPUT`, visitor.type as string)
            .share();
    }
}
