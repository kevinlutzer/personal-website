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
  MatInputModule,
} from '@angular/material';

import { HttpModule } from '@angular/http';

const MODULE_IMPORTS = [
    HttpModule,
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
