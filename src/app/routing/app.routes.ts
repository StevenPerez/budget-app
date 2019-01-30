import {Routes} from '@angular/router';

export const appRoutes: Routes = [{
  path: '',
  children: [{
    path: '',
    loadChildren: '../layouts/logged-in/logged-in.module#LoggedInModule'
  }],
}];
