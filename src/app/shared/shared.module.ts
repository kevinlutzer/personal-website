import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
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

import {SocialMediaComponent} from './social-media.component';

const MODULE_IMPORTS = [
    HttpModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    FlexLayoutModule
];


const SHARED_COMPONENTS = [
    SocialMediaComponent
];

@NgModule({
  imports: [
    ...MODULE_IMPORTS,
  ],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...MODULE_IMPORTS
  ]
})
export class SharedModule { }
