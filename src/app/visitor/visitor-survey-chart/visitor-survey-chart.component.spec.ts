import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSurveyChartComponent } from './visitor-survey-chart.component';

describe('VisitorSurveyChartComponent', () => {
  let component: VisitorSurveyChartComponent;
  let fixture: ComponentFixture<VisitorSurveyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorSurveyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorSurveyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
