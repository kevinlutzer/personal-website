import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Visitor } from './visitor.model';

const host = 'https://us-central1-personal-website-156005.cloudfunctions.net';

@Injectable()
export class VisitorApiService {

    constructor(
        public http: Http
    ) {}

    public getVisitors(): Observable<Visitor[]> {
        return this.http
            .get(`${host}/visitorLIST`)
            .map((response: Response) => {
                return response.json().visitors as Visitor[];
            })
            .share();
    }

    public putVisitor(visitor: Visitor): Observable<any> {
        return this.http
            .post(`${host}/visitorPUT`, visitor.type);
    }
}
