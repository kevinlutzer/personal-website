import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';

import {} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlertService } from './alert.service';
import { SupabaseService } from './supabase.service';

const MODULE_IMPORTS = [
  MatSnackBarModule,
  HttpClientModule,
  CommonModule,
  FlexLayoutModule
];

const CORE_SERVICES = [
  MatIconRegistry,
  AlertService,
  SupabaseService
];

@NgModule({
  imports: MODULE_IMPORTS,
  providers: CORE_SERVICES,
  exports: MODULE_IMPORTS,
})
export class CoreModule { }
