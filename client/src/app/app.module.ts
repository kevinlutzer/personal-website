import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { CoreModule as ProjectCoreModule } from './core';
import { SharedModule as ProjectSharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatBadgeModule
} from '@angular/material';
import { OverviewModule } from './overview/overview.module';
import { ProjectModule } from './project';

export const firebase = {
  apiKey: "AIzaSyDbMvCGwA74RM8IWThqZ52FS1Vh41B7-lY",
  authDomain: "website-klutzer.firebaseapp.com",
  databaseURL: "https://website-klutzer.firebaseio.com",
  projectId: "website-klutzer",
  storageBucket: "website-klutzer.appspot.com",
  messagingSenderId: "225726413234",
  appId: "1:225726413234:web:d34ea506e171cb8fff0cab",
  measurementId: "G-ES1P5L6WNQ"
} as FirebaseAppConfig;

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFireAnalyticsModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ProjectCoreModule,
    ProjectSharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    ProjectModule,
    OverviewModule, 
  ],
  providers: [
    {provide: 'GOOGLE_STORAGE_DOCS_DOMAIN', useValue: 'https://storage.googleapis.com/website-klutzer-docs'}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
