import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatInputModule
} from '@angular/material';

// import { FlexLayoutModule } from '@angular/flex-layout';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

import { CoreModule as ProjectCoreModule } from '../core';
import { SharedModule as ProjectSharedModule } from '../shared';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    AboutRoutingModule,
    CommonModule,
    FormsModule,
    // FlexLayoutModule,
    MatSelectModule,
    MatInputModule,
    ProjectCoreModule,
    ProjectSharedModule,
    ReactiveFormsModule,
  ]
})
export class AboutModule { }
