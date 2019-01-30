import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggedInRoutingModule} from './routing/logged-in-routing.module';
import {LoggedInComponent} from './components/logged-in.component';

@NgModule({
  declarations: [LoggedInComponent],
  imports: [
    CommonModule,
    LoggedInRoutingModule
  ]
})
export class LoggedInModule { }
