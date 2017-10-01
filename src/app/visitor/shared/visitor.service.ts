import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Visitor } from './visitor.model';
import { VisitorApiService } from './visitor.api.service';

@Injectable()
export class VisitorService {

  visitors: BehaviorSubject<Visitor[]> = new BehaviorSubject<Visitor[]>(null);
  constructor(
    private visitorApiService: VisitorApiService
  ) { }
  
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
    let response = this.visitorApiService
      .putVisitor(visitor);
    
    response
      .subscribe((response) => {
        this.list().subscribe();
      })
    
    return response;
  }
}
