import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSurveyDialogComponent } from './visitor-survey-dialog.component';

describe('VisitorSurveyDialogComponent', () => {
  let component: VisitorSurveyDialogComponent;
  let fixture: ComponentFixture<VisitorSurveyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorSurveyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorSurveyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
