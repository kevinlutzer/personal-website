import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdIconModule, MdButtonModule, MdCardModule, MdChipsModule, MdGridListModule } from '@angular/material';

import { ActivityCardComponent } from './activity-card';
import { ProjectCardComponent } from './project-card';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdChipsModule,
        MdGridListModule
    ],
    declarations: [
        ActivityCardComponent,
        ProjectCardComponent
    ],
    exports: [
        ActivityCardComponent,
        ProjectCardComponent
    ]
})

export class AppCommonModule {}
