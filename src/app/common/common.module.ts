import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdIconModule, MdButtonModule, MdCardModule, MdChipsModule, MdGridListModule } from '@angular/material';

import { ItemDisplayCardComponent } from './item-details';
import { ItemDetailsListComponent } from './item-details-list';
import { VisitorSurveyChartModule } from './visitor-survey-chart';
import { VisitorSurveyTableModule } from './visitor-survey-table';
import { VisitorSurveyDialogModule } from './visitor-survey-dialog';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdChipsModule,
        MdGridListModule,
        VisitorSurveyChartModule,
        VisitorSurveyTableModule,
        VisitorSurveyDialogModule
    ],
    declarations: [
        ItemDisplayCardComponent,
        ItemDetailsListComponent,
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdChipsModule,
        MdGridListModule,
        ItemDisplayCardComponent,
        ItemDetailsListComponent,
        VisitorSurveyChartModule,
        VisitorSurveyTableModule,
        VisitorSurveyDialogModule
    ]
})

export class AppCommonModule {}
