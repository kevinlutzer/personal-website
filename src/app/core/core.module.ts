import { NgModule } from '@angular/core';

import { MatSnackBarModule, MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AlertService } from './alert.service';


const MODULE_IMPORTS = [
    MatSnackBarModule,
    HttpClientModule,
    CommonModule
];

const CORE_SERVICES = [
    AlertService,
    MatIconRegistry
]

@NgModule({
  imports: [
    ...MODULE_IMPORTS,
  ],
  providers: [
    ...CORE_SERVICES,
  ],
  exports: [
    ...MODULE_IMPORTS
  ]
})
export class CoreModule { }
