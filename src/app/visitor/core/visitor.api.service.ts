import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Visitor, VisitorListApiResponse } from './visitor.model';

const host = 'https://us-central1-klutzer-personal-website.cloudfunctions.net';

@Injectable()
export class VisitorApiService {

    constructor(
        public http: HttpClient
    ) {}

    public getVisitors(): Observable<Visitor[]> {
        return this.http
            .get<VisitorListApiResponse>(`${host}/visitorLIST`)
            .map((response: VisitorListApiResponse) => response.visitors)
            .share();
    }

    public putVisitor(visitor: Visitor): Observable<string> {
        return this.http
            .post<string>(`${host}/visitorPUT`, visitor.type as string)
            .share();
    }
}
