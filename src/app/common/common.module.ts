import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdIconModule, MdButtonModule, MdCardModule, MdChipsModule, MdGridListModule } from '@angular/material';

import { ItemDisplayCardComponent } from './item-display-card';

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
    declarations: [],
    exports: [
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdChipsModule,
        MdGridListModule
    ]
})

export class AppCommonModule {}
