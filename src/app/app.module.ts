import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewestModule } from './newest/newest.module';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { ServicesModule } from './shared/services/services.module';
import * as firebase from 'firebase';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    ServicesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    NewestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
