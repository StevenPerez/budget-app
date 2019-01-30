import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './routing/app-routing.module.';
import {LoggedInComponent} from '../layouts/logged-in/components/logged-in.component';

@NgModule({
  declarations: [
    LoggedInComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
