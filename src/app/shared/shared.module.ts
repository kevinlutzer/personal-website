import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';


const MODULE_IMPORTS = [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule
];


const SHARED_COMPONENTS = [
    SocialMediaComponent
];

import {SocialMediaComponent} from './social-media.component';


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
