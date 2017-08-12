import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Visitor } from './visitor';
@Injectable()
export class VisitorApiService {
    public getAllVisitors(): Observable<Visitor[]> {
        return null;
    }

    public putVisitor(visitorType: string): void {
        return;
    }
}
