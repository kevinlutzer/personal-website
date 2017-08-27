import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ItemDisplayCardModule } from './item-display-card';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
    ],
    declarations: [],
    exports: [
        ItemDisplayCardModule
    ]
})

export class AppCommonModule {}
