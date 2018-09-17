import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Visitor } from './visitor.model';
import { VisitorListApiResponseInterface, VisitorApiServiceInterface } from './visitor.api.interface';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Injectable()
export class VisitorApiService implements VisitorApiServiceInterface {

    constructor(public http: HttpClient) {}

    public getVisitors(): Observable<Visitor[]> {
        return this.http
            .get<VisitorListApiResponseInterface>(`/api/visitor/list/`)
            .map((response: VisitorListApiResponseInterface) => response.visitors)
    }

    public putVisitor(visitor: Visitor): Observable<{message: string}> {
        return this.http
            .post<{message: string}>(`/api/visitor/create/`, {
                visitorType: visitor.type as string
            })
            .share();
    }
}
