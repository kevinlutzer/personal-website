import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSnackBarModule, MdDialogModule } from '@angular/material';

import { AlertService } from './alert.service';

@NgModule({
    imports: [
        CommonModule,
        MdSnackBarModule
    ],
    providers: [
        AlertService
    ]
})

export class AlertModule {}
