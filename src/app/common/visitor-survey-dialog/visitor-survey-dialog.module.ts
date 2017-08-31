import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule, MdSelectModule, MdButtonModule } from '@angular/material';

import { VisitorSurveyDialogComponent } from './visitor-survey-dialog.component';
import { VisitorType } from '../../core';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        MdDialogModule,
        MdSelectModule
    ],
    declarations: [ VisitorSurveyDialogComponent ],
    exports: [ VisitorSurveyDialogComponent ],
    entryComponents: [ VisitorSurveyDialogComponent ]
})

export class VisitorSurveyDialogModule {}
