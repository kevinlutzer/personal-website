import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { SurveyChartComponent } from './survey-chart.component';

@NgModule({
    imports: [
        ChartsModule,
        CommonModule
    ],
    declarations: [SurveyChartComponent],
    exports: [SurveyChartComponent],
    entryComponents: [SurveyChartComponent]
})

export class SurveyChartModule {}
