import {Routes} from '@angular/router';
import {LoggedInComponent} from '../components/logged-in.component';

export const loggedInRoutes: Routes = [{
  path: 'dashboard',
  component: LoggedInComponent,
  loadChildren: '../logged-in.module#LoggedInModule'
}];
