import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {loggedInRoutes} from './logged-in.routes';

@NgModule({
  imports: [RouterModule.forChild(loggedInRoutes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
