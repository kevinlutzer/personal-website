import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Visitor } from './visitor.model';
import { VisitorApiServiceInterface } from './visitor.api.interface';

@Injectable()
export class VisitorStubService implements VisitorApiServiceInterface {
    visitorList: Visitor[] = [
        {
            ipAddress: '127.0.1.1',
            type: 'Friend'
        },
        {
            ipAddress: '192.162.0.1',
            type: 'Professor'
        },
        {
            ipAddress: '192.168.101.1',
            type: 'Other'
        },
        {
            ipAddress: '192.168.11.1',
            type: 'Average Joe/Joesephine'
        },
        {
            ipAddress: '192.168.0.1',
            type: 'Coworker'
        },
        {
            ipAddress: '255.255.255.255',
            type: 'Venture Capitalist'
        }
    ];

    visitors: BehaviorSubject<Visitor[]> = new BehaviorSubject(this.visitorList);

    public getVisitors(): Observable<Visitor[]> {
        return this.visitors
            .asObservable()
            .share();
    }

    public putVisitor(visitor: Visitor): Observable<string> {
        const currentVisitorList = this.visitors.getValue();
        currentVisitorList.push(visitor);
        this.visitors.next(currentVisitorList);
        return Observable.of('success');
    }
}
