import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';  
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import {} from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


const MODULE_IMPORTS = [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    MatChipsModule,
    CommonModule,
    RouterModule
];

@NgModule({
  imports: [
    ...MODULE_IMPORTS,
  ],
  exports: [
    ...MODULE_IMPORTS,
    BreadcrumbComponent
  ],
  declarations: [
    BreadcrumbComponent
  ]
})
export class SharedModule { }
