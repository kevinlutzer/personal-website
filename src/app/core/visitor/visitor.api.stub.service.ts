import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Visitor } from './visitor';

@Injectable()
export class VisitorApiStubService {
    public getAllVisitors(): Observable<Visitor[]> {
        return Observable.of(
        [
            {
                ipAddress: '127.0.0.1',
                type: 'Friend'
            } as Visitor,
            {
                ipAddress: '192.168.0.1',
                type: 'Professor'
            } as Visitor,
            {
                ipAddress: '192.168.0.1',
                type: 'Other'
            } as Visitor,
            {
                ipAddress: '192.168.0.1',
                type: 'Average Joe/Joesephine'
            } as Visitor,
            {
                ipAddress: '192.168.0.1',
                type: 'Coworker'
            } as Visitor,
            {
                ipAddress: '192.168.0.1',
                type: 'Venture Capitalist'
            } as Visitor,

        ])
        .share();
    }
}
