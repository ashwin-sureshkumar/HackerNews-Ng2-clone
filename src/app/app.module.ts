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
    NewestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
