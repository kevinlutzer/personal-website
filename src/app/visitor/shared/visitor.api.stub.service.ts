import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Visitor } from './visitor.model';

@Injectable()
export class VisitorApiStubService {

    visitors: BehaviorSubject<Visitor[]> = new BehaviorSubject([
        {
            ipAddress: '127.0.1.1',
            type: 'Friend'
        } as Visitor,
        {
            ipAddress: '192.162.0.1',
            type: 'Professor'
        } as Visitor,
        {
            ipAddress: '192.168.101.1',
            type: 'Other'
        } as Visitor,
        {
            ipAddress: '192.168.11.1',
            type: 'Average Joe/Joesephine'
        } as Visitor,
        {
            ipAddress: '192.168.0.1',
            type: 'Coworker'
        } as Visitor,
        {
            ipAddress: '255.255.255.255',
            type: 'Venture Capitalist'
        } as Visitor,

    ]);

    public getVisitors(): Observable<Visitor[]> {
        return this.visitors
            .asObservable()
            .share();
    }

    public putVisitor(visitor: Visitor): Observable<any> {
        let currentVisitorList = this.visitors.getValue();
        currentVisitorList.push(visitor);
        this.visitors.next(currentVisitorList);
        return Observable.of({'success': true});
    }
}
