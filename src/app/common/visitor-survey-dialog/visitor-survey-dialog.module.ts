import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule } from '@angular/material';

import { VisitorSurveyDialogComponent } from './visitor-survey-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MdDialogModule
    ],
    declarations: [ VisitorSurveyDialogComponent ],
    exports: [ VisitorSurveyDialogComponent ],
    entryComponents: [ VisitorSurveyDialogComponent ]
})

export class VisitorSurveyDialogModule {}
