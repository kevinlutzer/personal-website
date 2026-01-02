import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AlertService } from './alert.service';

const MODULE_IMPORTS = [
  MatSnackBarModule,
  CommonModule
];

const CORE_SERVICES = [
  MatIconRegistry,
  AlertService,
  provideHttpClient(withInterceptorsFromDi()),
];

@NgModule({
  imports: MODULE_IMPORTS,
  providers: CORE_SERVICES,
  exports: MODULE_IMPORTS,
})
export class CoreModule { }
