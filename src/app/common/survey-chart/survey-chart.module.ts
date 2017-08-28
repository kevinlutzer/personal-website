import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';

import { ChartsModule } from 'ng2-charts';

import { SurveyChartComponent } from './survey-chart.component';

@NgModule({
    imports: [
        ChartsModule,
        CommonModule,
        MdCardModule
    ],
    declarations: [SurveyChartComponent],
    exports: [SurveyChartComponent],
    entryComponents: [SurveyChartComponent]
})

export class SurveyChartModule {}
