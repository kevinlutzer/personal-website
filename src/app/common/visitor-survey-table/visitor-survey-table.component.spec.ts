import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSurveyTableComponent } from './visitor-survey-table.component';

describe('VisitorSurveyTableComponent', () => {
  let component: VisitorSurveyTableComponent;
  let fixture: ComponentFixture<VisitorSurveyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorSurveyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorSurveyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
