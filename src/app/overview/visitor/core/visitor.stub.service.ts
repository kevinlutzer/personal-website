// import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';

// import { Visitor } from './visitor.model';
// import { VisitorApiServiceInterface } from './visitor.api.interface';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/share';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class VisitorStubService implements VisitorApiServiceInterface {
//     visitorList: Visitor[] = [
//         Visitor.fromApi({
//             ipAddress: '127.0.1.1',
//             type: 'Friend',
//             location: 'Canada',
//         }),
//         Visitor.fromApi({
//             ipAddress: '192.162.0.1',
//             type: 'Professor',
//             location: 'Canada',
//         }),
//         Visitor.fromApi({
//             ipAddress: '192.168.101.1',
//             type: 'Other',
//             location: 'Canada',
//         }),
//         Visitor.fromApi({
//             ipAddress: '192.168.11.1',
//             type: 'Average Joe/Joesephine',
//             location: 'Canada',
//         }),
//         Visitor.fromApi({
//             ipAddress: '192.168.0.1',
//             type: 'Coworker',
//             location: 'Canada',
//         }),
//         Visitor.fromApi({
//             ipAddress: '255.255.255.255',
//             type: 'Venture Capitalist',
//             location: 'Canada'
//         })
//     ];

//     visitors: BehaviorSubject<Visitor[]> = new BehaviorSubject(null);

//     public getVisitors(): Observable<Visitor[]> {
//         return this.visitors
//             .asObservable()
//             .share();
//     }

//     public putVisitor(visitor: Visitor): Observable<string> {
//         const currentVisitorList = this.visitors.getValue();
//         currentVisitorList.push(visitor);
//         this.visitors.next(currentVisitorList);
//         return Observable.of('success');
//     }
// }
