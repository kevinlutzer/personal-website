import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Visitor } from './visitor.model';
@Injectable()
export class VisitorApiService {
    public getVisitors(): Observable<Visitor[]> {
        return null;
    }

    public putVisitor(visitorType: string): void {
        return;
    }
}
