import { Observable } from 'rxjs/Observable';
import { Visitor } from './visitor.model';

export interface VisitorApiServiceInterface {
    getVisitors(): Observable<Visitor[]>;
    putVisitor(visitor: Visitor): Observable<string>;
}

export interface VisitorListApiResponseInterface {
    visitors: Visitor[];
    hasMore: boolean;
}

export interface VisitorApiInterface {
    type: string;
    ipAddress: string;
    city: string;
    country: string;
}