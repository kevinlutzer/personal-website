import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Visitor } from './visitor.model';

export interface VisitorApiServiceInterface {
    getVisitors(): Observable<Visitor[]>;
    putVisitor(visitor: Visitor): Observable<string>;
}

export interface VisitorListApiResponse {
    visitors: Visitor[];
}
