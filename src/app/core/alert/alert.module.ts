import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSnackBarModule, MdDialogModule } from '@angular/material';


import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';

@NgModule({
    imports: [
        CommonModule,
        MdSnackBarModule,
        MdDialogModule
    ],
    declarations: [
        AlertComponent
    ],
    exports: [
        AlertComponent
    ],
    entryComponents: [
        AlertComponent
    ],
    providers: [
        AlertService
    ]
})

export class AlertModule {}
