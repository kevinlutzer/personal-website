import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';

import { ChartsModule } from 'ng2-charts';

import { VisitorSurveyChartComponent } from './visitor-survey-chart.component';

@NgModule({
    imports: [
        ChartsModule,
        CommonModule,
        MdCardModule
    ],
    declarations: [VisitorSurveyChartComponent],
    exports: [VisitorSurveyChartComponent],
    entryComponents: [VisitorSurveyChartComponent]
})

export class VisitorSurveyChartModule {}
