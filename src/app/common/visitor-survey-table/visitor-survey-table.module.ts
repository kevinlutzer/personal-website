import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTableModule, MdCardModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { VisitorSurveyTableComponent } from './visitor-survey-table.component';

@NgModule({
    imports: [
        CommonModule,
        MdTableModule,
        MdCardModule,
        CdkTableModule
    ],
    declarations: [VisitorSurveyTableComponent],
    exports: [VisitorSurveyTableComponent],
    entryComponents: [VisitorSurveyTableComponent]
})

export class VisitorSurveyTableModule {}
