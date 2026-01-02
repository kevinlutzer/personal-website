import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';

import {} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert.service';

const MODULE_IMPORTS = [
  MatSnackBarModule,
  HttpClientModule,
  CommonModule
];

const CORE_SERVICES = [
  MatIconRegistry,
  AlertService,
];

@NgModule({
  imports: MODULE_IMPORTS,
  providers: CORE_SERVICES,
  exports: MODULE_IMPORTS,
})
export class CoreModule { }
