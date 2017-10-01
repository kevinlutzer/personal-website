import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Visitor } from './visitor.model';
import { VisitorApiService } from './visitor.api.service';

@Injectable()
export class VisitorService {

  visitors: BehaviorSubject<Visitor[]> = new BehaviorSubject<Visitor[]>(null);
  constructor(
    private visitorApiService: VisitorApiService
  ) {}

  public list(): Observable<Visitor[]> {
    this.visitorApiService
      .getVisitors()
      .subscribe((visitor) => {
        this.visitors.next(visitor);
        console.log(visitor);
    });
    return this.visitors.asObservable();
  }

  public put(visitor: Visitor): Observable<any> {
    return this.visitorApiService
      .putVisitor(visitor);
  }
}
