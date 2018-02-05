import { Observable } from 'rxjs/Observable';
import { Visitor } from './visitor.model';

export interface VisitorApiServiceInterface {
    getVisitors(): Observable<Visitor[]>;
    putVisitor(visitor: Visitor): Observable<string>;
}

export interface VisitorListApiResponse {
    visitors: Visitor[];
    hasMore: boolean;
}
