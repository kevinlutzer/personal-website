import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatToolbarModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

const MODULE_IMPORTS = [
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    // FlexLayoutModule
];

@NgModule({
  imports: [
    ...MODULE_IMPORTS,
  ],
  exports: [
    ...MODULE_IMPORTS
  ]
})
export class SharedModule { }
