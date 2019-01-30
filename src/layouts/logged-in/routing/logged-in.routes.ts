import {Routes} from '@angular/router';

export const loggedInRoutes: Routes = [{
  path: '',
  loadChildren: '../logged-in.module#LoggedInModule'
}];
