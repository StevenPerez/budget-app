import {Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {LoggedInComponent} from '../../layouts/logged-in/components/logged-in.component';

export const appRoutes: Routes = [{
  path: '',
  component: AppComponent
}, {
  path: 'loggedin',
  component: LoggedInComponent,
  loadChildren: '../../layouts/logged-in/logged-in.module#LoggedInModule'
}];
