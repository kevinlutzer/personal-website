import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Visitor } from './visitor';
import { VisitorApiService } from './visitor.api.service';

@Injectable()
export class VisitorService {

  visitors: BehaviorSubject<Visitor[]> = new BehaviorSubject<Visitor[]>(null);

  constructor(
    private visitorApiService: VisitorApiService
  ) { }

  public list(): Observable<Visitor[]> {
    this.visitorApiService.getAllVisitors().subscribe((visitor) => {
      this.visitors.next(visitor);
    });
    return this.visitors.asObservable();
  }

  public put(visitorType: string): void {
    this.visitorApiService.putVisitor(visitorType);
  }
}
