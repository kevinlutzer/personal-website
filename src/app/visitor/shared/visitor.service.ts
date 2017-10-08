import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Visitor } from './visitor.model';
import { VisitorApiService } from './visitor.api.service';

import { AlertService } from '../../core';

@Injectable()
export class VisitorService {

  visitors: BehaviorSubject<Visitor[]> = new BehaviorSubject<Visitor[]>(null);
  constructor(
    private visitorApiService: VisitorApiService,
    private alertService: AlertService
  ) {}

  public list(): Observable<Visitor[]> {
    this.visitorApiService
      .getVisitors()
      .subscribe(
        visitor => this.visitors.next(visitor),
        err => this.alertService.throwErrorSnack('Opps! We could not load visitor information')
      );
    return this.visitors.asObservable();
  }

  public put(visitor: Visitor): Observable<any> {
    return this.visitorApiService
      .putVisitor(visitor);
  }
}
