import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlertService } from './alert.service';

const MODULE_IMPORTS = [
  AngularFirestoreModule,
  MatSnackBarModule,
  HttpClientModule,
  CommonModule,
  FlexLayoutModule
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
