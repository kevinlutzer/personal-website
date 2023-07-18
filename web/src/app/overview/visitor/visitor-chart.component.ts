 import { Component, Input } from '@angular/core';
import { Visitor, VisitorOptions } from './visitor.interface';
import { ChartConfiguration } from 'chart.js';
import { VisitorService } from './visitor.service';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'visitor-chart',
  templateUrl: './visitor-chart.component.html',
})
export class VisitorChartComponent {
  public data$: Observable<{data: number[], label: string}[]>;
  public labels = VisitorOptions;
  public options: ChartConfiguration['options'] = {
    responsive: false
  };

  constructor(private visitorService: VisitorService) {
    const visitors$ = this.visitorService.visitors$;
    
    this.data$ = visitors$.pipe(
      map(visitors => {
        const values = this.labels.map(label => {
          return visitors.filter(visitor => visitor.visitorType === label).length;
        });

        return [{ data: values, label: 'Visitors Personas'}]
      }),
      shareReplay(1)
    );
  }


}

