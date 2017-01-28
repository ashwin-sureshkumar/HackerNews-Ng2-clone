import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewestModule } from './newest/newest.module';
import { TopStoriesModule } from './top-stories/top-stories.module';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { ServicesModule } from './shared/services/services.module';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import * as moment from 'moment';
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
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCtpUqWGuXLxyvRw91QtDFyTxMRptlxfws',
      databaseURL: 'https://hacker-news.firebaseio.com',
      authDomain: 'hackernews-clone.firebaseapp.com'
    }),
    ServicesModule.forRoot(),
    NewestModule,
    TopStoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
