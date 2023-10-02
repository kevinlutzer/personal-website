import { Component, HostListener, ViewChild } from '@angular/core';
import { VisitorOptions } from '../visitor.interface';
import { ChartConfiguration } from 'chart.js';
import { VisitorService } from '../visitor.service';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'visitor-chart',
  templateUrl: './visitor-chart.component.html',
})
export class VisitorChartComponent {
  public data$: Observable<{data: number[], label: string}[]>;
  public labels = VisitorOptions;
  public options: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  };

  @ViewChild('canvasChart', {static: false}) canvasChart: (HTMLCanvasElement | undefined);

  constructor(
    private visitorService: VisitorService
  ) {
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
  
  ngOnInit() {
    console.log(JSON.parse(JSON.stringify(this.canvasChart)));
    (<HTMLCanvasElement>this.canvasChart).width = 200;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event);
    event.target.innerWidth;
  }

}

