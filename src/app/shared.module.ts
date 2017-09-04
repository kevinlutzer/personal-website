import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MaterialModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdGridListModule,
    MdToolbarModule
} from '@angular/material';

import { ItemDisplayCardComponent } from './item-details';
import { ItemDetailsListComponent } from './item-details-list';
import { VisitorSurveyChartModule } from './visitor-survey-chart';
import { VisitorSurveyDialogModule } from './visitor-survey-dialog';
import { NavComponent } from './nav';

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
        MdToolbarModule,
        VisitorSurveyChartModule,
        VisitorSurveyDialogModule
    ],
    declarations: [
        ItemDisplayCardComponent,
        ItemDetailsListComponent,
        NavComponent
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
        VisitorSurveyDialogModule,
        NavComponent
    ]
})

export class SharedModule {}
