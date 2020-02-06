import { NgModule } from '@angular/core';

import { MatSnackBarModule, MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULE_IMPORTS = [
  AngularFirestoreModule,
  MatSnackBarModule,
  HttpClientModule,
  CommonModule,
  FlexLayoutModule
];

const CORE_SERVICES = [
  MatIconRegistry
];

@NgModule({
  imports: MODULE_IMPORTS,
  providers: CORE_SERVICES,
  exports: MODULE_IMPORTS,
})
export class CoreModule { }
