import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorChartComponent } from './visitory-chart.component';

describe('VisitorSurveyChartComponent', () => {
  let component: VisitorChartComponent;
  let fixture: ComponentFixture<VisitorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
