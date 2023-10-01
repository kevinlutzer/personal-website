import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';  
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MarkdownModule } from 'ngx-markdown';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';

const MODULE_IMPORTS = [
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    MarkdownModule,
    MatChipsModule,
    FlexLayoutModule
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
